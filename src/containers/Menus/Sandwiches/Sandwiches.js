import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import SandwichesItems from '../../../components/MenuItems/SandwichesItems/SandwichesItems'


class Sandwiches extends Component {
  render() {
    return (
        <Container>
            <SandwichesItems />
        </Container>
    );
  }
}


export default Sandwiches

 