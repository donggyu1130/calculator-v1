import {useState} from "react";

function App() {

  const [number,setNumber]=useState(0);
  //number는 인풋안에 출력되는 값이다

  const [conclusion,setConclusion]=useState(0);
  //conclusion은 결과로 출력될 값이다

  const [lastbutton,setLastbutton]=useState(0);
  //가장 최근에 클릭된 버튼이 저장된다
  
  /**
   * 숫자버튼1을 클릭했을때 인풋안에 1을 출력
   * conslusion에 1을 더해준다
   * 숫자버튼1을 클릭했을때 lastbutton에 1을 넣어준다
   */
  function number1Click() {
    if (lastbutton===1) {
      setConclusion(conclusion+'1');
      setNumber(conclusion+'1');
    }else {
      setNumber(1);
      setConclusion(Number(conclusion)+1);
      setLastbutton(1);
    }
  }

  /**
   * 숫자버튼2를 클릭했을때 인풋안에 2를 출력
   * conslusion에 2를 더해준다
   * 숫자버튼2를 클릭했을때 lastbutton에 2를 넣어준다
   */
  function number2Click() {
    setNumber(2);
    setConclusion(conclusion+2);
    setLastbutton(2);
  }

  /**
   * 숫자버튼3을 클릭했읋때 인풋안에 3을 출력
   * conclusion에 3을 더해준다
   * 숫자버튼3을 클릭했을때 lastbutton에 3을 넣어준다
   */
  function number3Click() {
    setNumber(3);
    setConclusion(conclusion+3);
    setLastbutton(3);
  }

  /**
   * 연산버튼+를 클릭했을때 lastbutton에 +라는 값을 넣어준다
   */
  function plusClick() {
    setLastbutton('+');
  }
  
  /**
   * 연산버튼=을 클릭했을때 conclusion값을 인풋안에 연산 결과로 출력
   * 연산버튼+를 클릭했을때 lastbutton에 =이라는 값을 넣어준다
   */
  function equalClick() {
    setNumber(conclusion);
    setLastbutton('=');
  }

  return (
    <div>
      <input type="number" value={number}/>
      <button onClick={number1Click}>1</button>
      <button onClick={number2Click}>2</button>
      <button onClick={number3Click}>3</button>
      <button onClick={plusClick}>+</button>
      <button onClick={equalClick}>=</button>
    </div>
  );
}

export default App;
