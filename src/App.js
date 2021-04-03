import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Details from './Components/Details';
import Cursor from './Components/Cursor';

function App() {
  return (
    <div>
      <Cursor />

      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/details/:id'>
            <Details />
          </Route>
          <Route exact path='*'>
            <h1>Under Construction....</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
