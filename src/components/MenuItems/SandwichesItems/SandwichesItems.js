import React from 'react'
import styles from './SandwichesItems.module.css'
import SandwichesMenuImg from '../../../assets/images/SandwichesMenu.png'
import ChickenAmericanSandwichImg from '../../../assets/images/ChickenAmericanSandwich.jpg'
import HamSandwichImg from '../../../assets/images/HamSandwich.jpg'
import SalmonSandwichImg from '../../../assets/images/SalmonSandwich.jpg'
import HotdogSandwichImg from '../../../assets/images/HotdogSandwich.jpg'
import ClubSandwichImg from '../../../assets/images/ClubSandwich.jpg'
import RoastedSandwichImg from '../../../assets/images/RoastedSandwich.jpg'
import CucumberSandwichImg from '../../../assets/images/CucumberSandwich.jpg'
import OliveSandwichImg from '../../../assets/images/OliveSandwich.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import SandwichesSummary from './SandwichesSummary/SandwichesSummary'




const sandwichesMedia = [
  
  {
    id: 0,
    img: ClubSandwichImg,
   title: 'Club Sandwich',
   ingredients: "Cheese, Meat, Bacon, Salad, Tomato, Onions.",
  apport:'942',
back: "/SandwichesItems",
   price: '10.90 €',
   direct: '/ContactData'
  },
  {
    id: 1,
    img: ChickenAmericanSandwichImg,
   title: 'American Chicken Sandwich',
   ingredients: "Bread, Chicken, Bacon, Salad, Pepper, Onions.",
   apport:'987',
   back: "/Sandwiches",
   price: '9.50 €',
   direct: '/ContactData'
  },
  {
    id: 2,
    img: HotdogSandwichImg,
   title: 'American Hot Dog',
   ingredients: "Bread, Sausage, Pepper, Pickles, Fried Onions, Cheese.",
   apport:'920',
   back: "/SandwichesItems",
   price: '8.00 €',
   direct: '/ContactData'
  },
  {
    id: 3,
    img: SalmonSandwichImg,
   title: 'Sandwich Sea Food',
   ingredients: "Bread, Fried Shrimps, Salmon, Salade, Cheese.",
   apport:'680',
   back: "/Sandwiches",
   price: '9.90 €',
   direct: '/ContactData'
  },
  {
    id: 4,
    img: HamSandwichImg,
   title: 'Ham Sandwich',
   ingredients: "Bread, Cheese, Ham, Bacon, Salad, Tomato, Cucumber.",
   apport:'538',
   back: "/SandwichesItems",
   price: '7.50 €',
   direct: '/ContactData'
  },
  
  {
    id: 5,
    img: RoastedSandwichImg,
   title: 'Roasted Chicken Sandwich',
   ingredients: "Bread, Cheese, Roasted Chicken, Salad, Tomato, Onions.",
  apport:'838',
back: "/Sandwiches",
   price: '7.90 €',
   direct: '/ContactData'
  },
  {
    id: 6,
    img: CucumberSandwichImg,
   title: 'Vegetarian Sandwich',
   ingredients: "Bread, Cheese, Salad, Tomato, Cucumber, Olives, Onions.",
  apport:'437',
back: "/SandwichesItems",
   price: '6.50 €',
   direct: '/ContactData'
  },
  {
    id: 7,
      img: OliveSandwichImg,
     title: 'Egg Sandwich',
     ingredients: "Cheese, Eggs, Olives, Salad, Tomato, Onions.",
     apport:'548',
     back: "/Sandwiches",
     price: '7.40 €',
     direct: '/ContactData'
    },

   ];
   export {sandwichesMedia}


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
   
   
   
   
   export default function SandwichesItems(props){
     
        
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
        <img src={SandwichesMenuImg} alt={'sandwichesmenu'}/>
      </div>
                   <Grid container cellHeight={180} className={styles.SandwichesContainer}>
                    {sandwichesMedia.map(tile => (
                            <Grid xs={12} key={tile.img} className={styles.SandwichesItems}>
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
             
   
             <SandwichesSummary id={selectedItemId}/> 
   
             
           </Grid>
         </Grid>
             </div>
           </Fade>}
         </Modal>
              </div>           
             
           )
       }
   
   
   