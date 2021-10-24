import {useState} from "react";

function App() {

  const [number,setNumber]=useState(0);
  //number는 인풋안에 출력되는 값이다

  /**
   * 숫자버튼1을 클릭했을때 인풋안에 1을 출력
   */
  function number1Click() {
    setNumber(1);
  }

  /**
   * 숫자버튼2를 클릭했을때 2를 출력
   */
  function number2Click() {
    setNumber(2);
  }

  return (
    <div>
      <input type="number" value={number}/>
      <button onClick={number1Click}>1</button>
      <button onClick={number2Click}>2</button>
      <button>+</button>
      <button>=</button>
    </div>
  );
}

export default App;
