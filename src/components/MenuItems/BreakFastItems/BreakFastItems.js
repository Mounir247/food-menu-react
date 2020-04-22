import React from 'react'
import styles from './BreakFastItems.module.css'
import BreakfastMenuImg from '../../../assets/images/BreakFastMenu.png'
import BegnetsCreamImg from '../../../assets/images/BegnetsCream.jpg'
import PancakeHoneyImg from '../../../assets/images/PancakeHoney.jpg'
import CookiesImg from '../../../assets/images/Cookies.jpg'
import WhiteCupCakeImg from '../../../assets/images/WhiteCupcake.jpg'
import ChocoCupCakeImg from '../../../assets/images/ChocolateCupcake.jpg'
import MintCupcakeImg from '../../../assets/images/MinthCupcake.jpg'
import ChurrosImg from '../../../assets/images/Churros.jpg'
import Grid from '@material-ui/core/Grid';
import BreakFastSummary from './BreakFastSummary/BreakFastSummary'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Link} from 'react-router-dom'

const breakfastMedia = [
  {
    id: 0,
    img: ChurrosImg,
   title: 'Churros',
   ingredients: "x 3 Sugar Churros",
  apport:'238',
back: "/BreakFastItems",
   price: '4.20 €',
   direct: '/ContactData'
  },
  
  {
    id: 1,
    img: CookiesImg,
   title: 'Cookies',
   ingredients: "x 3 Cookies with Chocolate",
  apport:'368',
back: "/BreakFastItems",
   price: '4.20 €',
   direct: '/ContactData'
  },
    
    {
      id: 2,
      img: PancakeHoneyImg,
     title: 'Pancake Honey',
     ingredients: "x4 Pancakes.",
     apport:'354',
     back: "/BreakFastItems",
     price: '5.50 €',
     direct: '/ContactData'
    },
    {
      id: 3,
      img: WhiteCupCakeImg,
     title: 'Vanilla & Strawberry Cupcake',
     ingredients: "x3 Cupcakes",
     apport:'138',
     back: "/BreakFastItems",
     price: '4.20 €',
     direct: '/ContactData'
    },
    {
      id: 4,
      img: ChocoCupCakeImg,
     title: 'Chocolate Cupcake',
     ingredients: "x3 Cupcakes",
    apport:'188',
back: "/BreakFastItems",
     price: '4.90 €',
     direct: '/ContactData'
    },
    {
      id: 5,
      img: MintCupcakeImg,
     title: 'Mint Cupcake',
     ingredients: "x3 Mint Cupcakes",
    apport:'196',
      back: "/BreakFastItems",
     price: '4.70 €',
     direct: '/ContactData'
    },
    {
      id: 6,
      img: BegnetsCreamImg,
     title: 'Cream Donuts',
     ingredients: "x4 Cream Donuts , x2 Ice Cream Balls",
     apport:'354',
     back: "/BreakFastItems",
     price: '4.70 €',
     direct: '/ContactData'
    },
   
   ];
   export {breakfastMedia}
   
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
        <img src={BreakfastMenuImg} alt={'breakfastmenu'}/>
      </div>
               <Grid cellHeight={180} className={styles.BreakfastContainer}>
             
                {breakfastMedia.map(tile => (
                       <Grid  xs={12} key={tile.img} className={styles.BreakfastItems}>
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


