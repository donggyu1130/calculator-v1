function App() {
  /**
   * 숫자버튼을 클릭했을때 해당 숫자를 출력
   */
  function numberClick() {
    alert('1');
  }

  return (
    <div>
      <input type="number"/>
      <button onClick={numberClick}>1</button>
      <button>2</button>
      <button>+</button>
      <button>=</button>
    </div>
  );
}

export default App;
