import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import SaladsItems from '../../../components/MenuItems/SaladsItems/SaladsItems'


class Pizzas extends Component {
  render() {
    return (
        <Container>
            <SaladsItems />
        </Container>
    );
  }
}


export default Pizzas

