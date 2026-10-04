import { NativeModule, requireNativeModule } from 'expo';

declare class PersonalLibraryWidgetExpansionModule extends NativeModule<{
  ping(): Promise<string>;
}> {}

export default requireNativeModule<PersonalLibraryWidgetExpansionModule>(
  'PersonalLibraryWidgetExpansion'
);
