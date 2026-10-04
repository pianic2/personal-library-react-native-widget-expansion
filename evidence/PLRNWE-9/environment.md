# PLRNWE-9 environment inventory

Date: 2026-10-04
Branch: `agent/plrnwe-s1-feasibility`
Repository: `pianic2/personal-library-react-native-widget-expansion` (remote had no refs or commits at execution start)

## Available and observed

| Component | Observed value | Evidence |
| --- | --- | --- |
| Node.js | 24.17.0 (via `~/.nvm/versions/node/v24.17.0/bin/node`) | command output |
| npm | 11.13.0 | command output |
| Java | OpenJDK 25.0.3 | `java -version` |
| Android build JDK | OpenJDK 21 (`/usr/lib/jvm/java-21-openjdk-amd64`) | CMake configuration and release build succeed with this JDK |
| Android SDK | `/home/optimus/Android/Sdk` | filesystem and adb |
| Android platform | API 36 installed | `platforms/android-36` |
| Android build tools | 35.0.0 and 36.0.0 installed | SDK directory |
| Android NDK | 27.1.12297006 installed | SDK directory |
| Android Emulator | 37.1.11.0; AVD `medium_phone` exists | `emulator -version`, `emulator -list-avds` |
| Attached Android device | Samsung SM-S928B, Android 16 / API 36 | `adb devices -l`, `getprop` |
| iOS build tools | Xcode and CocoaPods not present on this Linux host | `which xcodebuild`, `which pod` returned no path |

The Node 24 executable satisfies the Expo SDK 57 documented Node >=22.13 requirement. `ANDROID_HOME` and `ANDROID_SDK_ROOT` are unset in the shell; commands must set `ANDROID_SDK_ROOT` explicitly. Android command-line `sdkmanager` was not found under the SDK path.

## Execution status

- Android Release (`assembleRelease`, embedded JS) built and installed on the API 36 `medium_phone` emulator. The native module autolinked and returned `pong:android` on screen. After stopping the app process and launching it again with Metro stopped, a new process (`5578`) returned `pong:android`. See `android-release-build.txt`, `android-cold-launch.txt`, `android-ui.xml`, and `android-release-screen.png`.
- Two `expo prebuild --clean` regenerations produced identical Android file hashes; see `android-prebuild-1.sha256`, `android-prebuild-2.sha256`, and the empty `android-prebuild-semantic-diff.txt`.
- `npm install`, module build, ESLint, the module facade Jest test, Expo dependency check and Expo Doctor all pass. Expo Doctor reports 21/21 checks.
- Android physical device SM-S928B / API 36 was reachable at inventory time; it disconnected before a native install. The executed runtime evidence is emulator-based.
- iOS native build, autolinking, ping, runtime, and widget evidence cannot be collected in this Linux environment. The exact pending requirement is a compatible macOS runner with Xcode 26.4+ and CocoaPods to build the example, verify iOS autolinking/native `ping()` on simulator/device, and preserve its logs. No iOS runtime claim is made.
- A first Android CMake attempt under JDK 25 failed when Android Prefab parsed the restricted-method warning. The same CMake task and full release build succeeded under installed JDK 21; no source workaround was added. Use JDK 21 for Android builds.
- Expo Go is excluded. Use the development build/native example.
- No signing credentials or EAS build was requested or used.
