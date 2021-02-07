import React from 'react';
import styles from '../../styles/blogstyle.module.css'
 class NavMenu extends React.Component{
     render(){
         let fixed=null;
        if(this.props.position){fixed=styles.fixed}
        return(
            
            <div className={`${styles.navigationmenu} ${fixed}`}>
                 
                <div className={styles.blogh5}>ARCHIVE</div>
                
                <div className={styles.thinseparatorline}></div>
                    <div className={styles.date}>April 2018</div>
                    
                                                
            </div>
         )
     }
 }
 export default NavMenu;