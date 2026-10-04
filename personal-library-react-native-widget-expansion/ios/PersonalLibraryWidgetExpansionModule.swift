import ExpoModulesCore

public class PersonalLibraryWidgetExpansionModule: Module {
  public func definition() -> ModuleDefinition {
    Name("PersonalLibraryWidgetExpansion")

    AsyncFunction("ping") { () -> String in
      "pong:ios"
    }
  }
}
