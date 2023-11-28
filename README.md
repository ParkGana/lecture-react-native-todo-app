# lecture-react-native-todo-app

---

### 강의 링크

[따라하며 배우는 React Native 기초](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C/dashboard)

---

### 프로젝트 실행

npm run android (android 기준)

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
