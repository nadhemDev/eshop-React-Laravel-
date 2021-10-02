
import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
// screens
import Home from '../src/Screens/Home'
import ProductScreen from '../src/Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';


//Layout 
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
    
   <Navbar />
     {/* SideDrawer */}
     {/* Backdrop */}
     <main>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/product/:id" component={ProductScreen} />
         <Route  exact path ="/cart" component={CartScreen} />
     
       </Switch>
     </main>
     {/* HomeScreen */}
     {/* ProductScreen */}
     {/* CartScreen */}
     </Router>
  );
}

export default App;
