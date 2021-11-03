import {useState} from "react";

function App() {

  const [number,setNumber]=useState(0);
  //number는 인풋안에 출력되는 값이다

  const [conclusion,setConclusion]=useState(0);
  //conclusion은 결과로 출력될 값이다

  const [lastbutton,setLastbutton]=useState('NONE');
  //가장 최근에 클릭된 버튼이 저장된다
  
  /**
   * 숫자버튼1을 클릭했을때 인풋안에 1을 출력
   * conslusion에 1을 더해준다
   * 숫자버튼1을 클릭했을때 lastbutton에 1을 넣어준다
   */
  function number1Click() {
    if (lastbutton===1) {
      setConclusion(conclusion+'1');
      setNumber(conclusion+'1');//state는 변수가 아니기 때문에 값이 즉시 바뀌지 않는다
      setLastbutton(1);
    }else {
      setNumber(1);
      setConclusion(Number(conclusion)+1);//+가 눌린 이후에 1을 누르니 11에 더해져 12가 되버렸다
      //:진짜 문제는 우리는 지금 실제 계산기랑 또는 공책에 계산할때랑 다르게 만들고있기 때문이다
      //공책에 11+11을 계산할때:11을 쓴다>11을 또 쓴다>계산할떄 눈앞의 숫자 2개를 더한다
      //우리는 지금 공책으로 치면 11을 쓴다음 11을 지우고 12로 고쳐쓰고있다
      //변수를 2개쓴다:+눌리기 전에는 첫번째,눌린이후에는2번째 변수를 쓴다 마지막에=을 하면 그때 더한다
      setLastbutton(1);
    }
  }

  /**
   * 숫자버튼2를 클릭했을때 인풋안에 2를 출력
   * conslusion에 2를 더해준다
   * 숫자버튼2를 클릭했을때 lastbutton에 2를 넣어준다
   */
  function number2Click() {
    // console.log(lastbutton);//lastbutton값은1
    // console.log(!lastbutton==='+');//false:!(not연산자)는 lastbutton이라는 변수의 값만 not으로 취한다
    // console.log(lastbutton==='+');//false
    // console.log(!(lastbutton==='+'));//true:!(not 연산자)는 바로 뒤에있는 값을 not으로 취한다
    // console.log(lastbutton!=='+');//true:!==, !=(같지 않다 비교 연산자)
    if (typeof lastbutton==='number') {//if를 쓰는 이유:이전에 눌렸던 버튼이 숫자였는지 확인하기 위해서이다
      //lastbutton이 1인지 2인지 확인하는게 아니라 +가 눌렸는지 아닌지를 판별해야한다
      setConclusion(conclusion+'2');
      setNumber(conclusion+'2');
      setLastbutton(1);
    }else {
      setNumber(2);
      setConclusion(Number(conclusion)+2);
      setLastbutton(1);
    }
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
