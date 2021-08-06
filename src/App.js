import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './Containers/Dashboard/Dashboard';
import SignIn from './Containers/SignIn/SignIn';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Switch>
        <Route exact path='/' component={SignIn}/>
        <Route path='/Dashboard' component={Dashboard}/>
      </Switch>
    </div>
  );
}

export default App;
