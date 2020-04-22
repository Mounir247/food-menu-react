import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import DrinksItems from '../../../components/MenuItems/DrinksItems/DrinksItems'


class Drinks extends Component {
  render() {
    return (
        <Container>
            <DrinksItems />
        </Container>
    );
  }
}


export default Drinks

