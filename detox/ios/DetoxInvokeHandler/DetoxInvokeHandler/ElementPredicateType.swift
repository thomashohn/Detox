//
//  ElementPredicateType.swift (DetoxInvokeHandler)
//  Created by Asaf Korem (Wix.com) on 2022.
//

/// Represents a message predicate type.
public enum ElementPredicateType: String, Codable, Hashable {
  /// Text predicate, expects the element's text to equal the specified `value`.
  case text = "text"

  /// Label predicate, expects the element's label to equal the specified `value`.
  case label = "label"

  /// Value predicate, expects the element's value to equal the specified `value`.
  case value = "value"

  /// And predicate, "and" composition of the predicates specified under `predicates`.
  case and = "and"

  /// ID predicate, expects the element's identifier to equal the specified `value`.
  case id = "id"

  /// Type predicate, expects the element's identifier to equal the specified `value`.
  case type = "type"

  /// Traits predicate, expects the element's traits to equal the specified `value`.
  case traits = "traits"

  /// Ancestor predicate, expects the element to have an ancestor with the state specified in
  /// `predicate`.
  case ancestor = "ancestor"

  /// descendant predicate, expects the element to have a descendant with the state specified in
  /// `predicate`.
  case descendant = "descendant"
}