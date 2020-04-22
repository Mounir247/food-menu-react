import React, { Component } from 'react';

import burgerLogo from '../../assets/images/logo.png';
import styles from './Logo.module.css';
import { Link } from 'react-router-dom';

class Logo extends Component {
  render() {
    return (
    <div className={styles.Logo}>

    <Link to="/"><img src={burgerLogo} alt="MyBurger" /></Link>

    </div>
    )
  }
};

export default Logo;