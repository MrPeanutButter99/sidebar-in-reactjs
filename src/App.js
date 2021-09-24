import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav.js';
import './App.css';
import Home from './Pages/Home';
import Reports from './Pages/Reports';
import Products from './Pages/Products';

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/reports" component={Reports}/>
          <Route path="/products" component={Products}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
