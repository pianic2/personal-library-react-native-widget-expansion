package expo.modules.personallibrarywidgetexpansion

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class PersonalLibraryWidgetExpansionModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("PersonalLibraryWidgetExpansion")

    AsyncFunction("ping") {
      "pong:android"
    }
  }
}
