Projeto desenvolvido com React Native para mostrar o funcionamento do Redux

### Init New Project

> npx react-native init ProjectName

### Connect with NoxPlayer:

> adb connect 127.0.0.1:62001

### Install app

> npx react-native run-android

### Run Metro Server

> npx react-native start

### Load bundle.js in device

> set Debug server host & port for device -> [IP_LOCAL]:8081

### Generate APK

> cd android && ./gradlew bundleRelease

### Test APK

> npx react-native run-android --variant=release

### Para que os componentes apareçam ao teclar Ctrl + Space, instale:

> npm install --save @types/react-native
