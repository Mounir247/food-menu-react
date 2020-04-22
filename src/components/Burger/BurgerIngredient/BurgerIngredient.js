import React, {Component} from 'react';
import PropTypes from 'prop-types';
import topBread from '../../../assets/images/top-bread.png';

import salad from '../../../assets/images/salad.png';
import bacon from '../../../assets/images/bacon.png';
import cheese from '../../../assets/images/cheese.png';
import meat from '../../../assets/images/meat.png';
import bottomBread from '../../../assets/images/bottom-bread.png';
import styles from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {
    render(){
        let ingredient = null;

        switch (this.props.type) {
            case ("bread-bottom"):
              ingredient = (
              <div className={styles.BreadBottom}>
                            <img src={bottomBread} alt="MyBurger"/>

              </div>
              
              ) ;
              break;
            case ("bread-top"):
              ingredient = (
                <div className={styles.BreadTop}>
                   <img src={topBread} alt="MyBurger"/>
                  
                </div>
              );
              break;
            
            case ("cheese"):
              ingredient = (
                <div className={styles.Cheese}><img src={cheese} alt="MyBurger"/>
              </div>
              );
              break;
              case ("meat"):
              ingredient = (
                <div className={styles.Meat}><img src={meat} alt="MyBurger"/>
                </div>
              );
              break;
            case ("salad"):
              ingredient = (<div className={styles.Salad}><img src={salad} alt="MyBurger"/>
              </div>
              );
              break;
            case ("bacon"):
              ingredient = (
              <div className={styles.Bacon}>
                <img src={bacon} alt="MyBurger"/>
              </div>);
              break;
             
              default :
              ingredient = null;
          }
          return ingredient;
    } 
};

BurgerIngredient.propTypes={
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;