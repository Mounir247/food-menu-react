import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
import styles from './OrderSummary.module.css'


class OrderSummary extends Component {
    
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }
 
    render () {
        const ingredientSummary = Object.keys( this.props.ingredients )
            .map( igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span> : {this.props.ingredients[igKey]}
                    </li> );
            } ); 

        return (
            <Aux>
                <div className={styles.ModalInnerContainer}>
                
                <div className={styles.ModalHead}>
                Confirm Your Order
                </div>
                <div className={styles.ModalIngredients}>
                <p>Your order is a burger with the following ingredients:</p>
                <ul>
                  {ingredientSummary}
              </ul>
                </div>
              
              <div className={styles.ModalPrice}>
              <p><strong>Total Price : {this.props.price.toFixed( 2 )} €</strong></p>

                </div>
                <div className={styles.ModalCheckout}>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}><strong>CANCEL</strong></Button>
              <Button btnType="Success" clicked={this.props.purchaseContinued}><strong>CONTINUE</strong></Button>
                </div>
                </div>
                
            </Aux>
        );
    }
}

export default OrderSummary;