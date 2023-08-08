//
//  XCUIElementQuery+webMatching.swift (DetoxTesterApp)
//  Created by Asaf Korem (Wix.com) on 2023.
//

import Foundation
import DetoxInvokeHandler
import XCTest

/// Extension to `XCUIElementQuery` that adds matching capabilities that uses the white-box handler of Detox
/// (which are not available in XCUITest).
extension XCUIElementQuery {
  /// Returns a new query matches the given pattern.
  func webMatching(
    pattern: WebElementPattern,
    webView: XCUIElement,
    whiteBoxMessageHandler: WhiteBoxMessageHandler
  ) throws -> XCUIElementQuery {
    switch pattern {
      case .id, .className, .cssSelector, .name, .xpath, .href, .hrefContains, .tag:
        matcherLog("matching web-element with pattern: `\(pattern)`, using white-box JS operation")
        let elementsMatcher = try createJSElementsMatcher(pattern: pattern)

        // Create a JS code that uses the function generated above, and for each element replaces
        // its aria-label to a unique value and eventually return the list of new labels to match
        // natively.
        let script = """
          (() => {
            let elements = \(elementsMatcher)();

            let labels = [];
            for (let i = 0; i < elements.length; i++) {
                let label = 'autogenerated-label-' + i;
                elements[i].setAttribute('aria-label', label);
                elements[i].style.backgroundColor = 'red';
                labels.push(label);
            }

            return labels.map((label) => label.toString()).join(',');
          })();
          """

        let response = whiteBoxMessageHandler(
          .evaluateJavaScript(webViewElement: webView, script: script)
        )

        guard let response = response else {
          matcherLog(
            "cannot match by this pattern (\(pattern)) type using the XCUITest framework`",
            type: .error
          )

          throw Error.operationNotSupported(pattern: pattern)
        }

        guard case .string(let string) = response else {
          matcherLog(
            "response for white-box is not strings: \(response), failed to match any element",
            type: .info
          )

          if case .failed(let reason) = response {
            matcherLog("got error: \(reason)", type: .error)
          }

          return matchingNone()
        }

        matcherLog("found elements with aria-labels: \(string)")

        let ariaLabelsFound = string.split(separator: ",").map { String($0) }
        return webViews.descendants(matching: .any).matching(NSPredicate { evaluatedObject, _ in
          guard let element = evaluatedObject as? NSObject else {
            return false
          }

          let label = element.value(forKey: "label") as? String

          guard let label = label else {
            return false
          }

          return ariaLabelsFound.contains(label)
        })


      case .label(let label):
        return webViews.descendants(matching: .any).matching(NSPredicate { evaluatedObject, _ in
          guard let element = evaluatedObject as? NSObject else {
            return false
          }
          return element.value(forKey: "label") as? String == label
        })

      case .value(let value):
        return webViews.descendants(matching: .any).matching(NSPredicate { evaluatedObject, _ in
          guard let element = evaluatedObject as? NSObject else {
            return false
          }
          return element.value(forKey: "value") as? String == value
        })
    }
  }

  /// Returns a JS function for matching an element based on the given `pattern`.
  private func createJSElementsMatcher(pattern: WebElementPattern) throws -> String {
    switch pattern {
      case .id(let id):
        return "(() => Array.from(document.querySelectorAll('#\(id)')))"

      case .className(let className):
        return "(() => Array.from(document.getElementsByClassName('\(className)')))"

      case .cssSelector(let cssSelector):
        return "(() => Array.from(document.querySelectorAll('\(cssSelector)')))"

      case .name(let name):
        return "(() => Array.from(document.getElementsByName('\(name)')))"

      case .xpath(let xpath):
        return """
          (() => {
            let iterator = document.evaluate("\(xpath)", document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
            let result = [];
            let node = iterator.iterateNext();
            while (node) {
              result.push(node);
              node = iterator.iterateNext();
            }
            return result;
          })
          """

      case .href(let href):
        return "(() => Array.from(document.querySelectorAll('[href=\"\(href)\"]')))"

      case .hrefContains(let substring):
        return "(() => Array.from(document.querySelectorAll('[href*=\"\(substring)\"]')))"

      case .tag(let tag):
        return "(() => Array.from(document.getElementsByTagName('\(tag)')))"

      case .label, .value:
        throw Error.operationNotSupported(pattern: pattern)
    }
  }
}