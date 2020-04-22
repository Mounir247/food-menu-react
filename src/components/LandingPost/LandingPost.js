import React, { Component } from 'react'
import  styles from './LandingPost.module.css'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import burgerImg from '../../assets/images/cheeseburger.jpg'
import pizzaImg from '../../assets/images/pizza.jpg'
import DrinksImg from '../../assets/images/Drinks.jpg'
import SandwichesImg from '../../assets/images/Sandwiches.jpg'
import SaladAppetizerImg from '../../assets/images/ChickenPlate.jpg'
import breakfastImg from '../../assets/images/breakfast.jpg'
import chickenImg from '../../assets/images/Chicken.jpg'
import {Link} from 'react-router-dom'


const mainMedia = [
    {
      img: burgerImg,
     title: 'Burgers',
     author: 'Burgers box',
     direct: '/Burgers'
    },
     {
        img: pizzaImg,
        title: 'Pizza',
        author: 'Pizza box',
        direct: '/Pizzas'
     },
     {
        img: SandwichesImg,
        title: 'Sandwiches',
        author: 'Sandwich box',
        direct: '/Sandwiches'
     },
     {
      img: chickenImg,
      title: 'Chicken',
      author: 'Chicken box',
      direct: '/Chicken'
   },
     {
        img: SaladAppetizerImg,
        title: 'Appetizers & Salads',
        author: 'Salads box',
        direct: '/Salads',
     },
     {
        img: breakfastImg,
        title: 'Sweets & Breakfast',
        author: 'Breakfast box',
        direct: '/BreakFast',
     },
     {
      img: DrinksImg,
      title: 'Drinks',
      author: 'Drinks box',
      direct: '/Drinks',
   },
    
     
   ];

class LandingPost extends Component{
    render(){
        return(
            <div style={{textAlign:'center'}}>
               <div className={styles.LandingTitle}>
                Menu Categories
               </div>
               
            <GridList  >
              {mainMedia.map(tile => (
                      <GridListTile  key={tile.img} className={styles.LandingPost}>
                         <div className={styles.PostContainer}>
                         <Link to={tile.direct}>
                    <img src={tile.img} alt={tile.title} />
                    
                    </Link>
                    <Link to={tile.direct}>
                    
                    </Link>
                 <Link to={tile.direct} className={styles.BoxTitle}>
                 {tile.title}
                 </Link>
              
                 
                         </div>
                 
                </GridListTile>
              ))}
            </GridList>
          </div>
        )
    }

}
export default LandingPost