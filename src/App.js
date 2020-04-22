import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout'
import Landing from './containers/Landing/Landing'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders'
import Burgers from './containers/Menus/Burgers/Burgers';
import Pizzas from './containers/Menus/Pizzas/Pizzas'
import Salads from './containers/Menus/Salads/Salads'
import Drinks from './containers/Menus/Drinks/Drinks'
import BreakFast from './containers/Menus/BreakFast/BreakFast'
import Sandwiches from './containers/Menus/Sandwiches/Sandwiches'
import BreakFastItems from './components/MenuItems/BreakFastItems/BreakFastItems'
import ChickenItems from './components/MenuItems/ChickenItems/ChickenItems'
import DrinksItems from './components/MenuItems/DrinksItems/DrinksItems'
import SaladsItems from './components/MenuItems/SaladsItems/SaladsItems'
import PizzaItems from './components/MenuItems/PizzaItems/PizzaItems'
import SandwichesItems from './components/MenuItems/SandwichesItems/SandwichesItems'
import Chicken from './containers/Menus/Chicken/Chicken'

import ContactData from './containers/Checkout/ContactData/ContactData'
import BurgerItems from './components/MenuItems/BurgersItems/BurgerItems'

class App extends Component {
 
  render() {
    return (
      <div>
        <Layout>
          <Switch>
          <Route path="/ContactData" component={ContactData}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/orders" component={Orders}/>
          <Route path="/" exact component={Landing}/>
          <Route path='/BurgerBuilder'  component={BurgerBuilder}/>
          <Route path="/Burgers" component={Burgers}/>
          <Route path="/Pizzas" component={Pizzas}/>
          <Route path="/Salads" component={Salads}/>
          <Route path="/Sandwiches" component={Sandwiches}/>
          <Route path="/Chicken" component={Chicken}/>
          <Route path="/BreakFast" component={BreakFast}/>
          <Route path="/Drinks" component={Drinks}/>
          <Route path="/BurgerItems" component={BurgerItems}/>
          <Route path="/PizzaItems" component={PizzaItems}/>
          <Route path="/SaladsItems" component={SaladsItems}/>
          <Route path="/ChickenItems" component={ChickenItems}/>
          <Route path="/DrinksItems" component={DrinksItems}/>
          <Route path="/SandwichesItems" component={SandwichesItems}/>
          <Route path="/BreakFastItems" component={BreakFastItems}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
