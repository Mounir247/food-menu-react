import React from "react";
import styles from "./BurgerItems.module.css";
import BgMenuImg from '../../../assets/images/BurgersMenu.png'
import classicCheeseBurgerImg from "../../../assets/images/classicCheeseBurger.jpg";
import EggBurgerImg from "../../../assets/images/EggBurger.jpg";
import MontainBurgerImg from "../../../assets/images/MontainBurger.jpg";
import DoubleBurgerImg from "../../../assets/images/DoubleBurger.jpg";
import FonduBurgerImg from "../../../assets/images/FonduBurger.jpg";
import CheeseBaconBurgerImg from "../../../assets/images/CheeseBaconBurger.jpg";
import KidBurgerImg from "../../../assets/images/KidBurger.jpg";
import ForestBurgerImg from "../../../assets/images/ForestBurger.jpg";
import EggMeatBurgerImg from "../../../assets/images/EggMeatBurger.jpg";
import ChickenBurgerImg from "../../../assets/images/ChickenBurger.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import BurgerSummary from "./BurgerSummary/BurgerSummary";

const burgersMedia = [
  {
    id: 0,
    img: MontainBurgerImg,
    title: "Mountain Burger",
    ingredients: "Cheese, Meat, Bacon.",
    apport:'1143',
    price: "8.90 €",
    direct: "/ContactData",
    back: "/BurgerItems"
  },
  {
    id: 1,
    img: CheeseBaconBurgerImg,
    title: "Cheese Bacon Burger",
    ingredients: "Triple Cheese, Meat, Bacon, Tomato, Onions.",
    apport:'1046',
    price: "10.90 €",
    direct: "/ContactData",
    back: "/BurgerItems"
  },
  {
    id: 2,
    img: FonduBurgerImg,
    title: "Fondue Burger",
    ingredients: "Fondue Cheese, Meat, Bacon, Onions.",
    apport:'884',
    price: "9.60 €",
    direct: "/ContactData",
    back: "/BurgerItems"
  },
  {
    id: 3,
    img: DoubleBurgerImg,
    title: "Double Cheese Burger.",
    ingredients:
      "Cheese, Meat, Bacon, Salad, Tomato, Onions, Pickles, Burger Sauce.",
      apport:'974',
    price: "9.40 €",
    direct: "/ContactData",
    back: "/BurgerItems"
  },
  {
    id: 4,
    img: EggMeatBurgerImg,
    title: "Egg Meat Burger",
    ingredients: "Double Cheese, Meat, Egg, Bacon, Onions.",
    apport:'1087',
    price: "9.90 €",
    direct: "/ContactData",
    back: "/BurgerItems"
  },
  {
    id: 5,
    img: ForestBurgerImg,
    title: "Forest Burger",
    ingredients: "Cheese, Meat, Salad, Fried Onions.",
    apport:'695',
    price: "7.60 €",
    direct: "/ContactData",
    back: "/BurgerItems"
  },
  {
    id: 6,
    img: ChickenBurgerImg,
    title: "Chicken Burger",
    ingredients: "Cheese, Chicken, Salad, Tomato.",
    apport:'734',
    price: "8.20 €",
    direct: "/ContactData",
    back: "/BurgerItems"
  },
  {
    id: 7,
    img: classicCheeseBurgerImg,
    title: "Classic Cheese Burger",
    ingredients: "Cheese, Meat, Bacon, Salad, Tomato, Onions.",
    apport:'838',
    price: "7.20 €",
    direct: "/ContactData",
    back: "/BurgerItems"
  },
  {
    id: 8,
    img: EggBurgerImg,
    title: "Egg Burger",
    ingredients: "Cheese, Meat, Egg, Salad, Tomato.",
    apport:'768',
    price: "6.90 €",
    direct: "/ContactData",
    back: "/BurgerItems"
  },
  {
    id: 9,
    img: KidBurgerImg,
    title: "Kid Burger",
    ingredients: "Cheese, Meat, Tomato.",
    apport:'578',
    price: "5.50 €",
    direct: "/ContactData",
    back: "/BurgerItems"
  },
];
export { burgersMedia };

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function BurgerItems(props) {
  const mclasses = useStyles();
  const [selectedItemId, setSelectedItemId] = React.useState(null);
  const open = selectedItemId !== null;

  const handleOpen = id => {
    setSelectedItemId(id);
  };
  const handleClose = () => {
    setSelectedItemId(null);
  };

  return (
    <div  >
      <div className={styles.ItemsTitle}>
        <img src={BgMenuImg} alt={'burgermenu'}/>
      </div>
      <Grid container cellHeight={180} className={styles.BurgersContainer}>
        {burgersMedia.map(tile => (
          <Grid xs={12} key={tile.img} className={styles.BurgerItems}>
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
        close
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={mclasses.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        {open && (
          <Fade in={open}>
            <div>
              <Grid container spacing={3}>
                <Grid item xs={12} className={styles.ModalContainer}>
                  
                    <BurgerSummary id={selectedItemId} />
                  
                </Grid>
              </Grid>
            </div>
          </Fade>
        )}
      </Modal>
    </div>
  );
}
