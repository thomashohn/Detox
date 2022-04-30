//
//  XCUIElement+tap.swift (DetoxTesterApp)
//  Created by Asaf Korem (Wix.com) on 2022.
//

import Foundation
import XCTest

extension XCUIElement {
  /// Taps on element multiple times.
  func tap(withNumberOfTaps numberOfTaps: Int) {
    uiLog("requested tap on: `\(self)`, number of taps: \(numberOfTaps)")

    tap(withNumberOfTaps: numberOfTaps, numberOfTouches: 1)

    uiLog("\(self) tapped")
  }

  /// Taps on given `point` of element.
  func tap(on point: CGPoint) {
    uiLog("requested tap on: `\(self)`, in point: \(point)")

    let dx = point.x / frame.width
    let dy = point.y / frame.height
    coordinate(withNormalizedOffset: CGVector(dx: dx, dy: dy)).tap()

    uiLog("`\(self)` tapped")
  }
}