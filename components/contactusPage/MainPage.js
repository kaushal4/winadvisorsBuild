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
                <div className="contactForm">
                    <form>
                    <input name="name" placeholder="Enter your name"></input>
                    <input placeholder="Enter your email"></input>
                    <input placeholder="Enter your phone no"></input>
                    <input placeholder="Enter your message"></input>
                    <button type="submit">Submit</button>
                    </form>
                </div>
                
            </div>
            
        )
    }
}

export default MainPage;