import React, { Component } from 'react'
import  styles from './LandingHead.module.css'
import Grid from '@material-ui/core/Grid';
import headerImg from '../../../assets/images/header.png'
import FullLogoImg from '../../../assets/images/FullLogo.png'
import {Link} from 'react-router-dom'


const headMedia = [
    {
      img: headerImg,
     title: 'Burger',
     direct: '/BurgerBuilder'
    },  
      
   ];

class LandingHead extends Component{
    render(){
        return(
            <div className={styles.LandingHead}>
                <Grid item sx={12} >
                    <div className={styles.HeadLogo}>
                        <img src={FullLogoImg} alt={'DailyTasteFullLogo'}/>
                        <p>Don't wanna choose a burger ?</p>
                    </div>
          {headMedia.map(tile => (
              <div className={styles.BannerHead}>
                  <Link to={tile.direct}><img src={tile.img} alt={tile.title} /></Link>
              </div>
                 
              ))}
        </Grid>
           
          </div>
        )
    }

}
export default LandingHead