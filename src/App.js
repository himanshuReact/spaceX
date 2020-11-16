import './App.css';
import Spacex from './components/Spacex.js'
// import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Payloads from './components/Payloads';
import History from './components/History';


function App() {
  // const history = useHistory();
  return (
    <Router>
      <div className="App">
        <header className="app__header">
          <h1><i>SPACE-X</i></h1>

        </header>
        <div className='app__body'>
          <Spacex />
        </div>
      </div>
      {/* <Suspense fallback={<Placeholder />}> */}
      <Switch>
        <Route path="/payloads" component={Payloads} />
        <Route path="/history" component={History} />
      </Switch>
      {/* </Suspense> */}
    </Router>



  );
}

export default App;
