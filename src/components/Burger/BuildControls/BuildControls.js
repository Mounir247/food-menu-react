import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
 

const controls=[
    
    {label: 'Salad', type: 'salad', price: '0.5'},
    {label: 'Bacon', type: 'bacon', price: '0.7'},
    {label: 'Cheese', type: 'cheese', price: '0.4'},
    {label: 'Meat', type: 'meat', price: '1.3'},
];

const buildControls = (props) =>(
    <div className={styles.BuildControls}>
        <div className={styles.Price}>
             <p>Total Price : <strong>{props.price.toFixed(2)} €</strong> </p>
        </div>
       
        {controls.map(ctrl => (
            <BuildControl
             key={ctrl.label}
             label={ctrl.label}
             price={ctrl.price}
             added={() => props.ingredientAdded(ctrl.type)}
             removed = {() => props.ingredientRemoved(ctrl.type)}
             disabled= {props.disabled[ctrl.type]}
             />
        ))}
        <div className={styles.OrderButtonContainer}>
        <button 
        className={styles.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}>ORDER NOW</button>
        </div>
     
    </div>

)


export default buildControls;