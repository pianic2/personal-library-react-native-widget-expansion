# @personal-library/react-native-widget-expansion

Feasibility scaffold for PLRNWE Epic 1. This package currently proves Expo Modules API autolinking through a native `ping()` function. It does not claim widget expansion support yet.

## Requirements

- Node.js >= 22.13 (SDK 57 baseline)
- Expo SDK 57, React Native 0.86, React 19.2
- Android SDK Platform 36 and a compatible JDK for Android builds
- macOS with Xcode 26.4+ and CocoaPods for iOS builds

Expo Go is not a target because the native module is not part of Expo Go.

## Development

```sh
npm install
npm run build
npm run lint
npm test
npm run doctor
npm run prebuild:clean
JAVA_HOME=/path/to/jdk-21 ANDROID_SDK_ROOT=/path/to/android-sdk NODE_ENV=production npm run android:build
```

The repository uses npm workspaces for the standalone package and its example so one Expo/React/React Native installation is used during development. The package remains an independently packable workspace; a separate tarball consumer is required for PLRNWE-55. `npm run android:build` creates an embedded-JavaScript release variant. Use the same generated project for repeatability checks; do not edit generated native files as a substitute for module integration.

## Evidence

Task evidence is indexed under `../evidence/PLRNWE-9/`. The environment inventory distinguishes available tools from builds and runtime checks that have actually completed.

## Status

This is an experimental feasibility project. The Android and iOS widget flows, lifecycle, timing, native shell and config-plugin distribution remain unvalidated until their Jira tasks record direct execution evidence.
