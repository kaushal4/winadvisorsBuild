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
                    <h4>Feel free to reach us here and we’ll get back to you as soon as possible</h4>
                    <label for="name">NAME:</label>
                    <input  type="text" tabindex="1" required autofocus></input>
                    <label for="email">EMAIL:</label>
                    <input  type="email" tabindex="2" required></input>
                    <label for="contact">CONTACT NO:</label>
                    <input  type="tel" tabindex="3" required></input>
                    <label for="message">MESSAGE:</label>
                    <textarea  name="message"  ></textarea>
                    
                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">SUBMIT</button>
                   
                </form>
                
                
                </div>
                
            </div>
            
        )
    }
}

export default MainPage;