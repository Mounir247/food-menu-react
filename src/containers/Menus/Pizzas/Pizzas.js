import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import PizzaItems from '../../../components/MenuItems/PizzaItems/PizzaItems'


class Pizzas extends Component {
  render() {
    return (
        <Container>
            <PizzaItems />
        </Container>
          
         
      
    );
  }
}


export default Pizzas

