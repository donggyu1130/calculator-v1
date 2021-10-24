import {useState} from "react";

function App() {

  const [number,setNumber]=useState(0);
  /**
   * 숫자버튼1을 클릭했을때 1을 출력
   */
  function number1Click() {
    setNumber(1);
  }

  /**
   * 숫자버튼2를 클릭했을때 2를 출력
   */
  function number2Click() {
    alert('2');
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
