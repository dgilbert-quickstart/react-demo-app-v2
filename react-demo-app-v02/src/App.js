
function App() {

  function lnkuserefdemo1(){
    let msgText = "# app::lnkuserefdemo1"
    console.log(msgText)
  }
 
  return (
    <>
          <p>Demo react app v2.0</p>
          <div>
            <a href="#" onClick={lnkuserefdemo1}>useRef demo 1</a><p></p>
            <a href="#">useState demo 1</a><p></p>
          </div>
          <div>
            [displa info]
          </div>
          <p>Footer @ 2025</p>
    </>
  );
}

export default App;
