import React, { Component } from 'react'
import LandingPost from '../../components/LandingPost/LandingPost'
import LandingHead from '../../components/LandingPost/LandingHead/LandingHead'
import Container from '@material-ui/core/Container';
import styles from './Landing.module.css'


class Landing extends Component {
  render() {
    return (
      <Container maxWidth="md" className={styles.LandingItems}>
      <LandingHead/>
      <LandingPost/>
      </Container>
    );
  }
}


export default Landing