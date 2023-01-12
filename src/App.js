/* import logo from './logo.svg'; */
import Navbar from './navbar';
import Home from './Home';
import Practice from './practice';

function App() {
  /* const title = "welcome to react webpage";
  const likes= 50; */
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
      <Home/>
      {/* <Practice/> */}
        {/* <h1 style={{
          color: "green",
          fontWeight: "600"
        }}>This is a component</h1>
        
        <h3>{title}</h3>
        <p>total likes = {likes}</p>
        <p>{Math.random()*100}</p> */}
      </div>
    </div>
  );
}

export default App;
