# lecture-react-native-todo-app

---

### 강의 링크

[따라하며 배우는 React Native 기초](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C/dashboard)

---

### 프로젝트 실행

##### [ 모바일 기기 ]

npm start  
Expo Go 앱 실행 후 QR 스캔

<br/>

##### [ Android 에뮬레이터 ] [Android 에뮬레이터 (Android Studio) 설치 방법](https://docs.google.com/presentation/d/16aTNlCKriyH1oZ1Z8g1UM41ne9xVOdsFxHOhDflcqGE/edit?usp=sharing)

npm run android

<br/>

##### [ iOS 시뮬레이터 ] [iOS 시뮬레이터 (Xcode) 설치 방법](https://docs.google.com/presentation/d/1aYB6kJj1dxRIVaRPE-BHh8WExao8sSv8zwj2UfGvh2A/edit?usp=sharing)

npm run ios

---

### 프로젝트 설정

##### [ expo 프로젝트 생성 ]

npx create-expo-app . -t expo-template-blank-typescript

<br/>

##### [ svg 사용 ]

declaration.d.ts 파일 생성  
metro.config.ts 파일 생성  
npm install react-native-svg --save  
npm install -D react-native-svg-transformer  
npx expo install --fix

<br/>

##### [ redux 사용 ]

npm install @reduxjs/toolkit react-redux redux --save

<br/>

##### [ navigation 사용 ]

npm install @react-navigation/native @react-navigation/native-stack  
expo install react-native-screens react-native-safe-area-context

<br/>

##### [ firebase 사용 ]

firebase.js 파일 생성  
npm install firebase

<br/>

##### [ toast 사용 ]

npm install react-native-toast-message --save
