import   "./Login.css";


function App() {
  let onLogin = () => {};
  return (
    <div className="app">
      <div className="left-side">
        </div>     
      <div className="right-side">
        <div className="right-inner">
          <h1>W e l c o m e </h1>
          <div className="inputs">
            <input type="Email" placeholder="Email" />
            <input type="Password" placeholder="Password" />
          </div>
          <button onClick={onLogin}>
          Sigin in</button>
        </div>
        </div>     
    </div>
  );
}

export default App;
