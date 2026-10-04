Pod::Spec.new do |s|
  s.name           = 'PersonalLibraryWidgetExpansion'
  s.version        = '0.1.0'
  s.summary        = 'Cross-platform React Native surfaces activated from home screen widgets'
  s.description    = 'Experimental Expo module scaffold for the PLRNWE feasibility sprint.'
  s.author         = 'Niccolò Piazzi'
  s.homepage       = 'https://github.com/pianic2/personal-library-react-native-widget-expansion'
  s.platforms      = {
    :ios => '16.4',
    :tvos => '16.4'
  }
  s.source         = { git: 'https://github.com/pianic2/personal-library-react-native-widget-expansion.git', tag: s.version.to_s }
  s.static_framework = true

  s.dependency 'ExpoModulesCore'

  # Swift/Objective-C compatibility
  s.pod_target_xcconfig = {
    'DEFINES_MODULE' => 'YES',
  }

  s.source_files = "**/*.{h,m,mm,swift,hpp,cpp}"
end
