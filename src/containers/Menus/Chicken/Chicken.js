import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import ChickenItems from '../../../components/MenuItems/ChickenItems/ChickenItems'


class Chicken extends Component {
  render() {
    return (
        <Container>
            <ChickenItems />
        </Container>
    );
  }
}


export default Chicken

