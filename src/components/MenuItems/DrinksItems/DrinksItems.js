import React from 'react'
import styles from './DrinksItems.module.css'
import DrinksMenuImg from '../../../assets/images/DrinksMenu.png'
import BeerPintsImg from '../../../assets/images/BeerPints.jpg'
import SodaCansImg from '../../../assets/images/SodaCans.jpg'
import CocktailsImg from '../../../assets/images/Cocktails.jpg'
import SmallCoffeeImg from '../../../assets/images/SmallCoffee.jpg'
import WoodTeaImg from '../../../assets/images/ChristmasTea.jpg'
import Grid from '@material-ui/core/Grid';
import BreakFastSummary from './DrinksSummary/DrinksSummary'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Link} from 'react-router-dom'

const DrinksMedia = [
  {
    id: 0,
    img: SodaCansImg,
   title: 'Soda',
   ingredients: "x 1 Soda 33cl",
   apport:'140',
    back: "/DrinksItems",
   price: '2.00 €',
   direct: '/ContactData'
  },
  {
    id: 1,
    img: CocktailsImg,
   title: 'Cocktails',
   ingredients: "x 1 Cocktail 35cl",
   apport:'170',
    back: "/Drinks",
   price: '6.00 €',
   direct: '/ContactData'
  },
  {
    id: 2,
    img: BeerPintsImg,
   title: 'Soda',
   ingredients: "x 1 Beer Pint 50cl",
   apport:'210',
    back: "/DrinksItems",
   price: '4.00 €',
   direct: '/ContactData'
  },
  {
    id: 3,
    img: SmallCoffeeImg,
   title: 'Coffe',
   ingredients: "x 1 Coffee",
   apport:'30',
    back: "/Drinks",
   price: '1.50 €',
   direct: '/ContactData'
  },
  {
    id: 4,
    img: WoodTeaImg,
   title: 'Tea',
   ingredients: "x 1 Tea",
   apport:'30',
    back: "/DrinksItems",
   price: '1.50 €',
   direct: '/ContactData'
  },
  

   
   ];
   export {DrinksMedia}
   
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




export default function BreakFastItems(props){
  
     
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
        <img src={DrinksMenuImg} alt={'breakfastmenu'}/>
      </div>
               <Grid cellHeight={180} className={styles.DrinksContainer}>
             
                {DrinksMedia.map(tile => (
                       <Grid  xs={12} key={tile.img} className={styles.DrinksItems}>
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
         
         <BreakFastSummary id={selectedItemId}/> 
         
       </Grid>
     </Grid>
         </div>
       </Fade>}
     </Modal>
          </div>           
         
       )
   }


