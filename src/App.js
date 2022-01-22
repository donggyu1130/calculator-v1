import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  //number는 인풋안에 출력되는 값이다

  const [conclusion1, setConclusion1] = useState(0);
  //conclusion1은 더하기 이전의 저장되는 값이다

  const [conclusion2, setConclusion2] = useState(0);
  //conclusion2은 더하기 이후의 저장되는 값이다

  const [lastbutton, setLastbutton] = useState("NONE");
  //가장 최근에 클릭된 버튼이 저장된다

  const [plusclicked, setPlusclicked] = useState(false);
  //+가 눌렸는지 안눌렸는지 저장된다:이게 필요한 이유는 이게 없으면 계산이 안되는데 눌린후와 이전의 값에 구분이 안간다
  //false일때는 conclusion1,true일때는 conclusion2에 저장된다
  //우리가 지금 plusClicked를 보고있는 이유:-를 추가해야하기때문에 +와 구분하기 위해
  //이전과 이후의 값을 구분하는것은 사실 -버튼에도 필요한 기능이다.실제로 +,-연산은 plusClicked에서 이뤄진다
  //+버튼 뿐만 아니라 -,*,/등 모든 계산에서 필요하다

  const [lastoperator, setLastoperator] = useState("");
  //가장 최근에 눌린 연산버튼을 저장한다

  /**
   * 숫자버튼1을 클릭했을때 인풋안에 1을 출력
   * conslusion에 1을 더해준다
   * 숫자버튼1을 클릭했을때 lastbutton에 1을 넣어준다
   */
  function number1Click() {
    if (plusclicked) {
      //플러스가 눌렸는가? 눌렸다면2를 아니라면 1을 바꿔준다

      if (lastbutton === 1) {
        setConclusion2(conclusion2 + "1");
        setNumber(conclusion2 + "1"); //state는 변수가 아니기 때문에 값이 즉시 바뀌지 않는다
        setLastbutton(1);
      } else {
        setNumber(1);
        setConclusion2(Number(conclusion2) + 1); //+가 눌린 이후에 1을 누르니 11에 더해져 12가 되버렸다
        //:진짜 문제는 우리는 지금 실제 계산기랑 또는 공책에 계산할때랑 다르게 만들고있기 때문이다
        //공책에 11+11을 계산할때:11을 쓴다>11을 또 쓴다>계산할떄 눈앞의 숫자 2개를 더한다
        //우리는 지금 공책으로 치면 11을 쓴다음 11을 지우고 12로 고쳐쓰고있다
        //변수를 2개쓴다:+눌리기 전에는 첫번째,눌린이후에는2번째 변수를 쓴다 마지막에=을 하면 그때 더한다
        setLastbutton(1);
      }
    } else {
      //+가 눌리지 않았다면 1을 바꿔준다

      if (lastbutton === 1) {
        setConclusion1(conclusion1 + "1");
        setNumber(conclusion1 + "1"); //state는 변수가 아니기 때문에 값이 즉시 바뀌지 않는다
        setLastbutton(1);
      } else {
        setNumber(1);
        setConclusion1(Number(conclusion1) + 1);
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
    if (plusclicked) {
      if (typeof lastbutton === "number") {
        //if를 쓰는 이유:이전에 눌렸던 버튼이 숫자였는지 확인하기 위해서이다
        //lastbutton이 1인지 2인지 확인하는게 아니라 +가 눌렸는지 아닌지를 판별해야한다
        setConclusion2(conclusion2 + "2");
        setNumber(conclusion2 + "2");
        setLastbutton(1);
      } else {
        setNumber(2);
        setConclusion2(Number(conclusion2) + 2);
        setLastbutton(1);
      }
    } else {
      if (typeof lastbutton === "number") {
        setConclusion1(conclusion1 + "2");
        setNumber(conclusion1 + "2");
        setLastbutton(1);
      } else {
        setNumber(2);
        setConclusion1(Number(conclusion1) + 2);
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
    if (plusclicked) {
      if (typeof lastbutton === "number") {
        //if를 쓰는 이유:이전에 눌렸던 버튼이 숫자였는지 확인하기 위해서이다
        //lastbutton이 1인지 2인지 확인하는게 아니라 +가 눌렸는지 아닌지를 판별해야한다
        setConclusion2(conclusion2 + "3");
        setNumber(conclusion2 + "3");
        setLastbutton(1);
      } else {
        setNumber(3);
        setConclusion2(Number(conclusion2) + 3);
        setLastbutton(1);
      }
    } else {
      if (typeof lastbutton === "number") {
        setConclusion1(conclusion1 + "3");
        setNumber(conclusion1 + "3");
        setLastbutton(3);
      } else {
        setNumber(3);
        setConclusion1(Number(conclusion1) + 3);
        setLastbutton(1);
      }
    }
  }

  /**
   * 연산버튼+를 클릭했을때 lastbutton에 +라는 값을 넣어준다
   * 연산버튼+를 클릭했을때 lastoperator에 +라는 값을 넣어서 =버튼을 클릭할때 사용한다
   * 숫자버튼을 여러번눌러 2자리수 이상을 만들때 구분을 해준다
   */
  function plusClick() {
    setLastbutton("+");
    setLastoperator("+");
    setPlusclicked(true);
    if (lastoperator === "+") {
      setNumber(Number(conclusion1) + Number(conclusion2));
      setConclusion1(Number(conclusion1) + Number(conclusion2));
    } else if (lastoperator === "-") {
      setNumber(Number(conclusion1) - Number(conclusion2));
      setConclusion1(Number(conclusion1) - Number(conclusion2));
    }
    // setNumber(Number(conclusion1) - Number(conclusion2)); //실제로 게산되는 부분
    // //어떨때는 +로 계산되야하고 어떨때는 -로 계산되야 한다
    // //1.+로 계산되야 하는 경우:lastoperator가 +인 경우
    // //2.-로 계산되야 하는 경우:lastoperator가 -인 경우

    // //conclusion1,2의 값의 계산결과를 1에 넣고 2를 비워준다=>연산버튼을 여러번 눌러도 계산이 가능하게 해준다
    // setConclusion1(Number(conclusion1) + Number(conclusion2));
    setConclusion2(0);
  }

  /**
   * 연산버튼-를 클릭했을때 lastbutton에 -라는 값을 넣어준다
   * 연산버튼-를 클릭했을때 lastoperator에 -라는 값을 넣어서 =버튼을 클릭할때 사용한다
   * 숫바저튼을 여러번 눌러 2자리수 이상을 만들때 구분을 해준다
   */
  function minusClick() {
    setLastbutton("-");
    setLastoperator("-");
    setPlusclicked(true);
    setNumber(Number(conclusion1) - Number(conclusion2));

    setConclusion1(Number(conclusion1) - Number(conclusion2));
    setConclusion2(0);
  }

  /**
   * 연산버튼=을 클릭했을때 conclusion값을 인풋안에 연산 결과로 출력
   * conslusion1과conslusion2를 더하거나 빼준다.
   * lastoperator의 값을 참고해서 conclusion1,2를 더하거나 빼준다
   */
  function equalClick() {
    //우리가 기대하기로는 lastbutton은 +이거나 -일것이라고 기대했다
    //하지만 생각해보니 lastbutton은 숫자다 연산버튼을 누른후 바로 =을 누르지 않기때문이다
    //우리가 진짜로 원하는것은 직전의 누른버튼이 아닌 가장최근에 누른 연산버튼이다
    //하지만 지금 상황에서는 알수없다=>변수를 하나 추가한다
    if (lastoperator === "+") {
      setNumber(Number(conclusion1) + Number(conclusion2));
    } else if (lastoperator === "-") {
      setNumber(Number(conclusion1) - Number(conclusion2));
    }
    // setNumber(Number(conclusion1) - Number(conclusion2)); //여기 볼차례
    // //원래는 +였는데 -로 바꾸니 46번 시나리오가 작동했다. 하지만 다른것들이 안된다
    // //즉 +버튼을 눌렀으면 +가 되야하고 -를 눌렀으면 -가 되야한다.
    setLastbutton("=");
  }

  return (
    <div>
      <input type="number" role="number" value={number} readOnly />
      {/* 경고: 'onChange' 처리기가 없는 양식 필드에 'value' 
      요소를 제공했습니다. 읽기 전용 필드가 렌더링됩니다. 필드를
       변경할 수 있어야 하는 경우 'defaultValue'를 사용하십시오.
        그렇지 않으면 'OnChange' 또는 'readOnly'를 설정하십시오.*/}
      <button onClick={number1Click}>1</button>
      <button onClick={number2Click}>2</button>
      <button onClick={number3Click}>3</button>
      <button onClick={plusClick}>+</button>
      <button onClick={minusClick}>-</button>
      <button onClick={equalClick}>=</button>
    </div>
  );
}

export default App;
