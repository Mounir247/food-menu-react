import React from 'react'
import styles from './PizzaItems.module.css'
import PizzaPepperoniImg from '../../../assets/images/PizzaPepperoni.jpg'
import PizzaHamCheeseImg from '../../../assets/images/PizzaHamCheese.jpg'
import PizzaCheesesImg from '../../../assets/images/PizzaCheeses.jpg'
import DoublePanImg from '../../../assets/images/DoublePan.jpg'
import HamOlivePizzaImg from '../../../assets/images/HamOlivePizza.jpg'
import OnionsPizzaImg from '../../../assets/images/OnionsPizza.jpg'
import PizzasImg from '../../../assets/images/PizzasMenu.png'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import PizzaSummary from './PizzaSummary/PizzaSummary'

const pizzasMedia = [
  {
    id: 0,
    img: PizzaPepperoniImg,
   title: 'Pizza Pepperoni',
   ingredients: "Tomato sauce, Cheese, Pepperoni.",
   apport:'769',
   back: "/PizzaItems",
   price: '9.90 €',
   direct: '/ContactData'
  },
  {
    id: 1,
    img: PizzaHamCheeseImg,
   title: 'Pizza Cannibal Cheese',
   ingredients: "Mozzarella, Cheddar, Ham, Pepperoni, Cheese Sauce.",
   apport:'1084',
   back: "/Pizzas",
   price: '11.50 €',
   direct: '/ContactData'
  },
  
  {
    id: 2,
    img: PizzaCheesesImg,
   title: 'Pizza 5 Cheeses',
   ingredients: "Mozzarella, Cheddar, Camembert, Emmental, Chevre.",
  apport:'925',
back: "/PizzaItems",
   price: '11.50 €',
   direct: '/ContactData'
  },
  {
    id: 3,
    img: DoublePanImg,
   title: 'Double Pan',
   ingredients: "Pan : Cheese, Ham & Tomato, Pepperoni.",
  apport:'718',
back: "/Pizzas",
   price: '11.90 €',
   direct: '/ContactData'
  },
  {
    id: 4,
    img: HamOlivePizzaImg,
   title: 'Pizza Forester',
   ingredients: "Mozzarella, Cheddar, Bacon, Olives, Meat-Balls.",
  apport:'860',
back: "/PizzaItems",
   price: '12.90 €',
   direct: '/ContactData'
  },
  
  {
    id: 5,
    img: OnionsPizzaImg,
   title: 'Pizza Vegetarian',
   ingredients: "Mozzarella, Tomatoes, Pepper, Onions",
  apport:'478',
back: "/Pizzas",
   price: '8.90 €',
   direct: '/ContactData'
  },
  
    
   ];
   export {pizzasMedia}


   const useStyles = makeStyles(theme => ({
      modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    }));
   
   
   
   
   export default function PizzaItems(props){
     
        
      const mclasses = useStyles();
      const [selectedItemId, setSelectedItemId] = React.useState(null);
   const open = selectedItemId !== null;
      
      const handleOpen = (id) => {
        
        setSelectedItemId(id)
      };
    
      const handleClose = () => {
       setSelectedItemId(null)
      };
   
           return(
              <div >
                 <div className={styles.ItemsTitle}>
        <img src={PizzasImg} alt={'burgermenu'}/>
      </div>
                   <Grid container cellHeight={180} className={styles.PizzasContainer}>
                    {pizzasMedia.map(tile => (
                            <Grid  xs={12} key={tile.img} className={styles.PizzasItems}>
                         <Link onClick={() => handleOpen(tile.id)}>
              <img src={tile.img} alt={tile.title} />
            </Link>
            <div className={styles.ItemDescription}>
              <Link onClick={() => handleOpen(tile.id)}>
                <h4 className={styles.ItemDescriptionTitle}>{tile.title}</h4>
                <div className={styles.ItemDescriptionIngredients}>
               
               {tile.ingredients}
                
                </div>
                <div className={styles.ItemDescriptionPrice}>
                <p className={styles.CardFooter}>{tile.price}</p>
                </div>
              </Link>
            </div>
                      </Grid>
                    ))}
                  </Grid>
                  <Modal
           aria-labelledby="transition-modal-title"
           aria-describedby="transition-modal-description"
           className={mclasses.modal}
           open={open}
           onClose={handleClose}
           closeAfterTransition
           BackdropComponent={Backdrop}
           BackdropProps={{
             timeout: 500,
           }}>
           {open && <Fade in={open}>
             <div>
             <Grid container spacing={3}>
           <Grid item xs={12} className={styles.ModalContainer}>
             
   
             <PizzaSummary id={selectedItemId}/> 
   
             
           </Grid>
         </Grid>
             </div>
           </Fade>}
         </Modal>
              </div>           
             
           )
       }
   
   
   