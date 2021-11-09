import {useState} from "react";

function App() {

  const [number,setNumber]=useState(0);
  //number는 인풋안에 출력되는 값이다

  const [conclusion1,setConclusion1]=useState(0);
  //conclusion1은 더하기 이전의 저장되는 값이다

  const [conclusion2,setConclusion2]=useState(0);
  //conclusion2은 더하기 이후의 저장되는 값이다

  const [lastbutton,setLastbutton]=useState('NONE');
  //가장 최근에 클릭된 버튼이 저장된다

  const [plusclicked,setPlusclicked]=useState(false);
  //+가 눌렸는지 안눌렸는지 저장된다
  
  /**
   * 숫자버튼1을 클릭했을때 인풋안에 1을 출력
   * conslusion에 1을 더해준다
   * 숫자버튼1을 클릭했을때 lastbutton에 1을 넣어준다
   */
  function number1Click() {
    if (plusclicked) {//플러스가 눌렸는가? 눌렸다면2를 아니라면 1을 바꿔준다

      if (lastbutton===1) {
        setConclusion2(conclusion2+'1');
        setNumber(conclusion2+'1');//state는 변수가 아니기 때문에 값이 즉시 바뀌지 않는다
        setLastbutton(1);
      }else {
        setNumber(1);
        setConclusion2(Number(conclusion2)+1);//+가 눌린 이후에 1을 누르니 11에 더해져 12가 되버렸다
        //:진짜 문제는 우리는 지금 실제 계산기랑 또는 공책에 계산할때랑 다르게 만들고있기 때문이다
        //공책에 11+11을 계산할때:11을 쓴다>11을 또 쓴다>계산할떄 눈앞의 숫자 2개를 더한다
        //우리는 지금 공책으로 치면 11을 쓴다음 11을 지우고 12로 고쳐쓰고있다
        //변수를 2개쓴다:+눌리기 전에는 첫번째,눌린이후에는2번째 변수를 쓴다 마지막에=을 하면 그때 더한다
        setLastbutton(1);
      }

    }else{//+가 눌리지 않았다면 1을 바꿔준다
      
      if (lastbutton===1) {
        setConclusion1(conclusion1+'1');
        setNumber(conclusion1+'1');//state는 변수가 아니기 때문에 값이 즉시 바뀌지 않는다
        setLastbutton(1);
      }else {
        setNumber(1);
        setConclusion1(Number(conclusion1)+1);
        setLastbutton(1);
      }
    
    }
    
  }

  /**
   * 숫자버튼2를 클릭했을때 인풋안에 2를 출력
   * conslusion에 2를 더해준다(O)
   * 숫자버튼2를 클릭했을때 lastbutton에 2를 넣어준다
   */
  function number2Click() {
    if(plusclicked) {

      if (typeof lastbutton==='number') {//if를 쓰는 이유:이전에 눌렸던 버튼이 숫자였는지 확인하기 위해서이다
        //lastbutton이 1인지 2인지 확인하는게 아니라 +가 눌렸는지 아닌지를 판별해야한다
        setConclusion2(conclusion2+'2');
        setNumber(conclusion2+'2');
        setLastbutton(1);
      }else {
        setNumber(2);
        setConclusion2(Number(conclusion2)+2);
        setLastbutton(1);
      }

    }else{
      if (typeof lastbutton==='number') {
        setConclusion1(conclusion1+'2');
        setNumber(conclusion1+'2');
        setLastbutton(1);
      }else {
        setNumber(2);
        setConclusion1(Number(conclusion1)+2);
        setLastbutton(1);
      }

    }
  }

  /**
   * 숫자버튼3을 클릭했읋때 인풋안에 3을 출력
   * conclusion에 3을 더해준다
   * 숫자버튼3을 클릭했을때 lastbutton에 3을 넣어준다
   */
  function number3Click() {
    setNumber(3);
    setConclusion1(conclusion1+3);
    setLastbutton(3);
  }

  /**
   * 연산버튼+를 클릭했을때 lastbutton에 +라는 값을 넣어준다
   * 숫자버튼을 여러번눌러 2자리수 이상을 만들때 구분을 해준다
   */
  function plusClick() {
    setLastbutton('+');
    setPlusclicked(true);
    setNumber(Number(conclusion1)+Number(conclusion2));
  }
  
  /**
   * 연산버튼=을 클릭했을때 conclusion값을 인풋안에 연산 결과로 출력
   * 연산버튼+를 클릭했을때 lastbutton에 =이라는 값을 넣어준다
   * conslusion1과conslusion2를 더해준다
   */
  function equalClick() {
    setNumber(Number(conclusion1)+Number(conclusion2));
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
