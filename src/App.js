import React from "react";
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Footer from './components/Footer';

const App = () => {
   return (
      <div className="App">
         <Nav/>
         <main>
            <Switch>
               <Route path={'/'} exact component={Home}/>
               <Route path={'/products'} component={Products}/>
               <Route path={'/cart'} component={Cart}/>
            </Switch>
         </main>
         <Footer/>
      </div>
   );
};
export default App;
