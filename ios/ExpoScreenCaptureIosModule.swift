import ExpoModulesCore

public class ExpoScreenCaptureIosModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoScreenCaptureIos")

    View(ExpoScreenCaptureIosView.self) {
    }
  }
}
