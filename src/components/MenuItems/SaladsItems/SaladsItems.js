import React from 'react'
import styles from './SaladsItems.module.css'
import SaladsMenuImg from '../../../assets/images/SaladsMenu.png'
import AvocadoSaladImg from '../../../assets/images/AvocadoSalad.jpg'
import SeaFoodSaladImg from '../../../assets/images/SeaFoodSalad.jpg'
import ChickenNuggetsImg from '../../../assets/images/ChickenNuggets.jpg'
import FrenchFriesPlateImg from '../../../assets/images/FrenchFriesPlate.jpg'
import PotatoesImg from '../../../assets/images/Potatoes.jpg'
import CheesePlateImg from '../../../assets/images/CheesePlate.jpg'
import NaansImg from '../../../assets/images/Naans.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import SaladSummary from './SaladSummary/SaladSummary'

const saladsMedia = [
   
  {
    id: 0,
    img: FrenchFriesPlateImg,
   title: 'French Fries',
   ingredients: "French Fries Plate.",
  apport:'208',
   back: "/SaladsItems",
   price: '2.90 €',
   direct: '/ContactData'
  },
  
  {
    id: 1,
    img: PotatoesImg,
   title: 'Potatoes',
   ingredients: "Potatoes Plate.",
  apport:'249',
    back: "/SaladsItems",
   price: '3.50 €',
   direct: '/ContactData'
  },
    {
      id: 2,
      img: AvocadoSaladImg,
     title: 'Salad Avocado',
     ingredients: "Cheese, Meat, Bacon, Salad, Tomato, Onions.",
    apport:'838',
     back: "/SaladsItems",
     price: '7.20 €',
     direct: '/ContactData'
    },
    {
      id: 3,
      img: SeaFoodSaladImg,
     title: 'Salad Sea Food',
     ingredients: "Cheese, Meat, Bacon, Salad, Tomato, Onions.",
    apport:'838',
    back: "/SaladsItems",
     price: '7.20 €',
     direct: '/ContactData'
    },
    {
      id: 4,
      img:ChickenNuggetsImg,
     title: 'Chicken Nuggets',
     ingredients: "x3 Nuggets",
    apport:'238',
    back: "/SaladsItems",
     price: '3.90 €',
     direct: '/ContactData'
    },
    
    {
      id: 5,
      img: NaansImg,
     title: 'Cheese Naans',
     ingredients: "x3 Cheese Naans",
    apport:'350',
     back: "/SaladsItems",
     price: '3.90 €',
     direct: '/ContactData'
    },
    {
      id: 6,
      img: CheesePlateImg,
     title: 'Cheese Full Plate',
     ingredients: "6 different types of cheese from around the world",
    apport:'450',
     back: "/SaladsItems",
     price: '7.90 €',
     direct: '/ContactData'
    },
   
  
   ];
   export {saladsMedia}


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
   
   
    
   
   export default function BurgerItems(props){
     
        
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
        <img src={SaladsMenuImg} alt={'saladsmenu'}/>
      </div>
                   <Grid cellHeight={180} className={styles.SaladsContainer}>
                 
                    {saladsMedia.map(tile => (
                           <Grid  xs={12} key={tile.img} className={styles.SaladsItems}>
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
             
   
             <SaladSummary id={selectedItemId}/> 
   
             
           </Grid>
         </Grid>
             </div>
           </Fade>}
         </Modal>
              </div>           
             
           )
       }
   
   
   