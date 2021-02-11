import React from 'React';
import styles from '../../styles/contactus.module.css'
class MainPage extends React.Component{
    render(){
        return (
            <div className={styles.mainpage}>
                <div className={styles.contactTiles}>
                <div className={styles.contactTile}>
                    <img src="./images/email.png"></img>
                    <p>Expect us to respond within 48 hours.</p>
                </div>
                <div className={styles.contactTile}>
                <img src="./images/fax.jpg"></img>
                    <p>Contact us through fax</p>
                </div>
                <div className={styles.contactTile}>
                <img src="./images/call.png"></img>
                    <p>We are waiting to hear from you.</p>
                </div>
                </div>
                
                <div className={styles.contactform}>  
                <form className={styles.contact} action="" method="post">
                    <h3>Contact Us</h3>
                    <h4>We will get back to you within 48 hours!.</h4>
                    
                    <input placeholder="Your name" type="text" tabindex="1" required autofocus></input>
                    
                    <input placeholder="Your Email Address" type="email" tabindex="2" required></input>
                   
                    <input placeholder="Your Phone Number" type="tel" tabindex="3" required></input>
                    
                    <input placeholder="Enter your message" type="text" required></input>
                    
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                   
                </form>
                
                
                </div>
                
            </div>
            
        )
    }
}

export default MainPage;