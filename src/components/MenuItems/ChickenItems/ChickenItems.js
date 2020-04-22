import React from 'react'
import styles from './ChickenItems.module.css'
import ChickenMenuImg from '../../../assets/images/ChickenMenu.png'

import ChickenTendersImg from '../../../assets/images/ChickenTenders.jpg'
import ChickenWingsImg from '../../../assets/images/ChickenWings.jpg'
import ChickenBurgerImg from '../../../assets/images/ChickenBurger.jpg'
import IndianChickenImg from '../../../assets/images/IndianChicken.jpg'
import ChickenBucketImg from '../../../assets/images/ChickenBucket.jpg'
import ChickenPlateImg from '../../../assets/images/ChickenPlate.jpg'

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import ChickenSummary from './ChickenSummary/ChickenSummary'

const chickenMedia = [
  {
    id: 0,
    img: ChickenPlateImg,
   title: 'Chichen Full Treat',
   ingredients: "x6 Onion Rings, x6 Cheese Sticks, x6 Wings, x6Tenders, x6 Drumsticks.",
apport:'1578',
 back: "/Chicken",
   price: '21.50 €',
   direct: '/ContactData'
  },
  {
    id: 1,
    img: ChickenBucketImg,
   title: 'Big Fried Bucket ',
   ingredients: "x6 Wings, x6 Tenders, x6 Drumsticks.",
apport:'1154',
back: "/Chicken",
   price: '17.90 €',
   direct: '/ContactData'
  },
      {
        id: 2,
        img: ChickenTendersImg,
       title: 'Chicken Tenders',
       ingredients: "x6 Crispy Fried Chicken Tenders.",
       apport:'358',
       back: "/Chicken",
       price: '5.50 €',
       direct: '/ContactData'
      },
      
    {
      id: 3,
      img: ChickenWingsImg,
     title: 'Chicken Wings',
     ingredients: "x6 Chicken Wings",
    apport:'488',
     back: "/Chicken",
     price: '6.20 €',
     direct: '/ContactData'
    },
    {
      id: 4,
        img: IndianChickenImg,
       title: 'Indian Roasted Chicken',
       ingredients: "x1 Roasted Indian Chicken Stick",
       apport:'678',
       back: "/Chicken",
       price: '7.60 €',
       direct: '/ContactData'
      },
     
      
    
      {
        id: 5,
        img: ChickenBurgerImg,
        title: "Chicken Burger",
        ingredients: "Cheese, Chicken, Salad, Tomato.",
        apport:'734',
        price: "8.20 €",
        direct: "/ContactData",
        back: "/BurgerItems"
      },
   
   
   ];

   export {chickenMedia}


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
  




export default function ChickenItems(props){
  
     
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
        <img src={ChickenMenuImg} alt={'chickenmenu'}/>
      </div>
               <Grid cellHeight={180} className={styles.ChickenContainer}>
             
                {chickenMedia.map(tile => (
                      <Grid  xs={12} key={tile.img} className={styles.ChickenItems}>
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
        

         <ChickenSummary id={selectedItemId}/> 

         
       </Grid>
     </Grid>
         </div>
       </Fade>}
     </Modal>
          </div>           
         
       )
   }


