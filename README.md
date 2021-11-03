# calculator-v1

계산기 만들기
1.화면을 그린다(완료)

=>1-1.숫자가 보이는 창

  1-2.숫자버튼1

  1-3.숫자버튼2

  1-4.연산버튼+

  1-5.연산버튼=

2.아주 아주 간단한 기능부터 만들기(완료)(테스트용 작업이기에 추후 삭제)

=>2-1.숫자버튼1을 누르면 alert으로 숫자1이 뜨게한다

3.2번에 대한 코드개선(완료)
=>익명함수를 일반함수로 개선
  함수에 주석 추가

4.아주 아주 간단한 기능 하나더 만들기(완료)
=>숫자버튼2을 누르면 alert으로 숫자2이 뜨게한다

5.4에대한 코드개선(완료)
=>새로 추가한 함수에 대한 주석 작성
  줄내림 개선
  주석을 자세하게 수정했다
  함수명 알기 쉽게 수정

6.아주 아주 간단하지만 조금은 어려운 기능 추가(완료)
=>숫자버튼1을 누르면 숫자창에 숫자1이 나타나게한다
  기능2를 삭제

7.6에대한 코드개선(완료)
=>줄내림 개선
  함수 주석 개선
  number라는 state의 의미 작성

8.아주 아주 간단하지만 조금은 어려운 기능 추가(완료)
=>숫자버튼2을 누르면 숫자창에 숫자2이 나타나게한다
  기능4를 삭제

9.8에대한 코드개선(완료)
=>함수 주석 개선

10.시나리오 구현(완료)
=>1누른다-1이 출력됨(O)
  +누른다-화면이 그대로(O)
  2누른다-2가 출력됨(O)
  =누른다-3이 출력됨(O)

11.10번에 대한 코드개선(완료)
=>줄내림 개선
  함수 주석 추가

12.시나리오 구현(완료)
=>1을 누른다-1이 출력됨(O)
  +를 누른다-화면이 그대로(O)
  1을 누른다-화면이 그대로(O)
  =을 누른다-2가 출력됨(X)
  주의:기존 시나리오 또한 작동해야함

13.12번에 대한 코드개선(완료)
=>줄내림 개선
  주석 추가

14.시나리오 구현(완료)
=>2를 누른다-2이 출력됨(O)
  +를 누른다-화면이 그대로(O)
  2를 누른다-화면이 그대로(O)
  =을 누른다-4가 출력됨(O)
  주의:기존 시나리오 또한 작동해야함

15-1.3번 버튼 추가(완료)
15-2.버튼3에대한 함수 추가(완료)

16.15번에 대한 코드개선(완료)
=>줄내림 개선
  함수 주석 추가

17.시나리오 구현(완료)
=>1을 누른다-1이 출력됨(O)
  1을 누른다-11이 출력됨(O)
  //1버튼이 2번눌렸다는걸 알수있어야한다 해결해야되는 것을 보고 막힐때가 있다 *이럴때는 생각을 제멋대로 잔뜩하는게 좋다*
  //lastbutton이라는 변수를 만든다(O)
  //if문으로 lastbutton이 1이라면 기존값에 1을 문자열로 붙히고
  //1이 아니라면 인풋값에 1을 출력한다

  //+를 눌렀을때 작동하는 함수 추가
  주의:기존 시나리오 또한 작동해야함

18.17번에 대한 코드개선(완료)
=>줄내림 개선
  함수 주석 추가
  state주석 추가

19.시나리오 구현(완료)
=>1을 누르면 1이 출력됨(O)
  1을 누르면 11이 출력됨(O)
  1을 누르면 111이 출력됨(O)
  //문제:+'1'을 쓰면 문자열로 인식된다
  주의:기존 시나리오 또한 작동해야함(O)

20.19번에 대한 코드개선(완료)
=>불필요한 테스트코드 삭제
  불필요한 변수 삭제
  //state가 변경될때의 딜레이때문에 한번 다른 변수를 사용해봤다
  //하지만 결국 다른건 없었다

21.시나리오 구현(완료)
=>1을 누른다-1이 출력됨(O)
  1을 누른다-11이 출력됨(O)
  +를 누른다-변화없음(O)
  1을 누른다-새로 1이 출력됨(O)
  =을 누른다-12가 출력됨(O)
  주의:기존 시나리오 또한 작동해야함

22.시나리오 구현(완료)
=>1을 누른다-1이 출력됨(O)
  1을 누른다-11이 출력됨(O)
  +를 누른다-변화없음(O)
  2를 누른다-새로 2가 출력됨(O)
  =을 누른다-13가 출력됨(O)
  주의:기존 시나리오 또한 작동해야함

23.시나리오 구현(완료)
=>2를 누른다-2가 출력됨(O)
  2를 누른다-22가 출력됨(O)
  주의:기존 시나리오 또한 작동해야함

=>2를 누른다-2가 출력됨(O)
  2를 누른다-22가 출력됨(O)
  +를 누른다=변화없음(O)
  1을 누른다-1이 출력됨(O)
  =을 누른다-23이 출력됨(O)
  주의:기존 시나리오 또한 작동해야함

24.시나리오 구현(완료)
=>1을 누른다-1이 출력됨(O)
  2를 누른다-12가 출력됨(O)
  주의:기존 시나리오 또한 작동해야함

25.코드 개선
=>주석을 지금은 지우지 않는다:까먹지 않기위해서:까먹지 않으려면 지금은 
남겨두지만 나중에 노트에다가 정리한다=>주석을 지운다

26.시나리오 구현(완료)
=>2를 누른다=2가 출력됨(O)
  1을 누른다-21이 출력됨(O)
  주의:기존 시나리오 또한 작동해야함

27.시나리오 구현(완료)
=>2를 누른다-2가 출력됨(O)
  1을 누른다-21이 출력됨(O)
  2를 누른다-212가 출력됨(O)
  1을 누른다-2121이 출력됨(O)
  +를 누른다-변화없음(O)
  1을 누른다-새로1이 출력됨(O)
  =을 누른다-2122가 출력됨(O)
  주의:기존 시나리오 또한 작동해야함

28.시나리오 구현()
=>1을 누른다-1이 출력됨(O)
  1을 누른다-11이 출력됨(O)
  +를 누른다-변화없음(O)
  1을 누른다-새로1이 출력됨(O)
  1을 누른다-11이 출력됨(O)
  =을 누른다-22가 출력됨(O)
  주의:기존 시나리오 또한 작동해야함




















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
