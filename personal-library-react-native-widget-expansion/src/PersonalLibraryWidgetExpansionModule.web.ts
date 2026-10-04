import { registerWebModule, NativeModule } from 'expo';

// PersonalLibraryWidgetExpansionModule is not available on the web platform.
class PersonalLibraryWidgetExpansionModule extends NativeModule<Record<string, never>> {}

export default registerWebModule(
  PersonalLibraryWidgetExpansionModule,
  'PersonalLibraryWidgetExpansionModule'
);
