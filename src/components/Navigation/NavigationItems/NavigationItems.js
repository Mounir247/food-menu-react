import React from 'react';

import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <p className={styles.TitleMenu}>Create your own Burger</p>
        <NavigationItem link="/burgerbuilder" exact>Make Yours</NavigationItem>
        {/* <NavigationItem link="/orders">Orders</NavigationItem> */}
        <p className={styles.TitleMenu}>Menu</p>
        <NavigationItem link="/Burgers">Burgers</NavigationItem>
        <NavigationItem link="/Pizzas">Pizzas</NavigationItem>
        <NavigationItem link="/Sandwiches">Sandwiches</NavigationItem>
        <NavigationItem link="/Chicken">Chicken</NavigationItem>
        <NavigationItem link="/Salads">Salads</NavigationItem>
        <NavigationItem link="/BreakFast">BreakFast</NavigationItem>
        <NavigationItem link="/Drinks">Drinks</NavigationItem>
        <NavigationItem link="/Pizzas">Pizzas</NavigationItem>
    </ul>
);

export default navigationItems;