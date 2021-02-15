import React from "react";
import styles from "../styles/navigator.module.css";
export default class FixedNavigator extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="fixedElement">
                <img className={styles.symbol} src="/symbols/phone.png"></img>
                <a href="tel:+ 91 9150471122" className={styles.tooltiptext}>+ 91 9150471122</a>
                <img className={styles.symbol} src="/symbols/pin.png"></img>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <img className={styles.symbol} src="/symbols/whatsapp.png"></img>
                <img className={styles.symbol} src="/symbols/facebbook.png"></img>
                <img className={styles.symbol} src="/symbols/linkedin.png"></img>
                <img className={styles.symbol} src="/symbols/twitter.png"></img>
                <div className={styles.followus}>US</div>
                <br></br><br></br>
                <div className={styles.followus}>FOLLOW</div>
            </div>
        )
    }
}