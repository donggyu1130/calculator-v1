function App() {
  return (
    <div>
      <input type="number"/>
      <button onClick={()=>{
        alert('1');
      }}>1</button>
      <button>2</button>
      <button>+</button>
      <button>=</button>
    </div>
  );
}

export default App;
