import Navbar from './navbar';
import Home from './Home';
import Practice from './practice';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './Create';
import BlogsDetails from './BlogsDetails';
import NotFound from './NotFound';

function App(){
  return(
    <Router>
      <div className='App'>
        <Navbar/>
        <div className="content">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/create">
                <Create/>
              </Route>
              <Route path="/blog/:id">
                <BlogsDetails/>
              </Route>
              <Route path="*">
                <NotFound/>
              </Route>
            </Switch>
        </div>
      </div>
    </Router>
  )
}
/* function App() {
  //const title = "welcome to react webpage";
  //const likes= 50;
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
      <Home/>
      {<Practice/> }
        {/* <h1 style={{
          color: "green",
          fontWeight: "600"
        }}>This is a component</h1>
        
        <h3>{title}</h3>
        <p>total likes = {likes}</p>
        <p>{Math.random()*100}</p> }
      </div>
    </div>
  );
} */

export default App;
