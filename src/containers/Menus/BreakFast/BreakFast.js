import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import BreakFastItems from '../../../components/MenuItems/BreakFastItems/BreakFastItems'


class BreakFast extends Component {
  render() {
    return (
        <Container>
            <BreakFastItems />
        </Container>
    );
  }
}


export default BreakFast

