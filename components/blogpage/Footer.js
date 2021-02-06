import React from 'react';
import styles from '../../styles/blogstyle.module.css'
class Footer extends React.Component{
    constructor(){
        super();
        this.state={footerstyle:"black",footertext:"footer is right now black"}
    }
    render(){
        return(
            <div className={styles.footer}>
                <h3>{this.state.footertext}</h3>
            </div>
        )
    }
}

export default Footer;