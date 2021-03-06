import React, { Component } from 'react';
import Aux from '../../../../hoc/Auxiliary/Auxiliary';
import styles from './BurgerSummary.module.css'
import {burgersMedia} from '../BurgerItems'
import Button from '../../../UI/Button/Button';
import {Link} from 'react-router-dom'

class BurgerSummary extends Component {
    
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[BurgerSummary] WillUpdate');
    }
    
    render () {
        
      const item = burgersMedia.find(item => item.id === this.props.id);

        return ( 
            <Aux>
              <div className={styles.ModalInnerContainer}>
                <div className={styles.ModalHead}>
                Please confirm your order 
                </div>
                <div className={styles.ModalTitle}>
                {item.title}
                </div>
                
                <div className={styles.ModalImage}>
                <img src={item.img} alt={item.title} />
                </div>
            
                <div className={styles.ModalIngredients}>
                  <p><strong>Ingredients : </strong>{item.ingredients}</p>
                </div>
                <div className={styles.ModalApport}>
                  Nutritional : {item.apport} kcal
                </div>
                <div className={styles.ModalPrice}>
                  Total Price : {item.price}
                </div>
                <div className={styles.ModalCheckout}>
                <Link to={item.back}><Button >CANCEL</Button></Link>
               <Link to={item.direct}><Button >ORDER</Button></Link>
                </div>
              </div>
                        </Aux>
        );
    }
} 

export default BurgerSummary;