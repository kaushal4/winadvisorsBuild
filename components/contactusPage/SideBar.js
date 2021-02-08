import React from 'React';
import styles from '../../styles/contactus.module.css'
class SideBar extends React.Component{
    render(){
        
            let fixed=null;
            if(this.props.position){fixed=styles.fixed}
            return(
            <div className={`${styles.sidebar} ${fixed}`}>
                     
            <div className={styles.blogh5}>ARCHIVE</div>
            
            <div className={styles.thinseparatorline}></div>
                <div className={styles.date}>April 2018</div>
                
                                            
        </div>
        )
    }
}
export default SideBar;
