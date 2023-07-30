//
//  Executor.swift (DetoxTesterApp)
//  Created by Asaf Korem (Wix.com) on 2022.
//

import Foundation
import DetoxInvokeHandler
import XCTest

/// Executes all Detox UI operations.
class Executor {
  /// Used to send actions back.
  private(set) var serverMessageSender: DetoxServerMessageSenderProtocol!

  /// Executes the given operation from the XCTest bundle.
  func execute(
    _ action: ServerMessageType,
    params: [String: AnyHashable],
    messageId: NSNumber
  ) {
    execLog("executes action: \(action)")

    do {
      switch action {
        case .loginSuccess:
          execLog("successfully logged into Detox server!")

        case .disconnect:
          disconnect(messageId: messageId)

        case .setRecordingState:
          try setRecordingState(params: params, messageId: messageId)

        case .waitForBackground:
          waitFor(appState: .background, messageId: messageId)

        case .waitForIdle:
          try waitForIdle(messageId: messageId)

        case .setSyncSettings:
          try setSyncSettings(params: params, messageId: messageId)

        case .deliverPayload:
          try deliverPayload(params: params, messageId: messageId)

        case.setOrientation:
          try setDeviceOrientation(params: params, messageId: messageId)

        case .currentStatus:
          reportCurrentStatus(messageId: messageId)

        case .shakeDevice:
          try shakeDevice(messageId: messageId)

        case .captureViewHierarchy:
          captureViewHierarchy(params: params, messageId: messageId)

        case .waitForActive:
          waitFor(appState: .foreground, messageId: messageId)

        case .sendToHome:
          sendToHome(messageId: messageId)

        case.reactNativeReload:
          try reactNativeReload(messageId: messageId)

        case .invoke:
          try handleInvoke(params: params, messageId: messageId)

        case .isReady:
         try isReady(messageId: messageId)

        case .cleanup:
          cleanup(params: params, messageId: messageId)

        case .terminate:
          terminate(messageId: messageId)
      }
    } catch {
      handleTestFailure(error: error, messageId: messageId)
    }
  }

  func setServerMessageSender(_ sender: DetoxServerMessageSenderProtocol) {
    self.serverMessageSender = sender
  }
}