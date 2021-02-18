import React from "react";
import styles from "../styles/navigator.module.css";
export default class FixedNavigator extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="fixedElement">
                <div className={styles.up}>
                
                <a href="+91 8735629720" className={styles.tooltiptext}>
                <img className={styles.symbol} src="/symbols/navigator/phone.png"></img>
                </a>
                <a href="407,4th Floor,Sanjar Enclave,Opposite-PVR Cinema, S.V.Road, Kandivali(West), Mumbai 400 067" className={styles.tooltiptext}>
                <img className={styles.symbol} src="/symbols/navigator/pin.png"></img>
                </a>
                </div>
                <div className={styles.down}>
                <a href="https://wa.me/+919082114257"><img className={styles.symbol} src="/symbols/navigator/whatsapp.png"></img></a>
                <a href="https://www.facebook.com/WIN-CORPORATE-ADVISORS-193426394758642"><img className={styles.symbol} src="/symbols/navigator/facebook.png"></img></a>
                <a href="https://www.linkedin.com/company/wincorporateadvisors/"><img className={styles.symbol} src="/symbols/navigator/linkedin.png"></img></a>
                <a href="https://twitter.com/AdvisorsWin"><img className={styles.symbol} src="/symbols/navigator/twitter.png"></img></a>
                <div className={styles.followusdiv}>
                <div className={styles.followus}>US</div>
                <br></br><br></br>
                <div className={styles.followus}>FOLLOW</div>
                </div>
                </div>
            </div>
        )
    }
}