import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ShopContainer from './components/ShopContainer';

function App() {
  return (
    <Router>
      <Link to='/shopping-cart'>Home</Link>
      <Link to='/shopping-cart/shop'>Shop</Link>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={ShopContainer} />
      </Switch>
    </Router>
  );
}

export default App;
