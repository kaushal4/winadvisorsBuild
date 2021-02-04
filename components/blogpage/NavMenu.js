import React from 'react';
import styles from '../../styles/blogstyle.module.css'
 function NavMenu(){
     return(
        <div className={styles.navigationmenu}>
             <div className={styles.search}>
            <input type="text" className={styles.searchTerm} placeholder="What are you looking for?"></input>
            <button type="submit" className={styles.searchButton}>
            <i class="fa fa-search"></i>
            </button>
            </div>
            <div className={styles.blogh5}>ARCHIVE</div>
            
            <div className={styles.thinseparatorline}></div>
                <div className={styles.date}>January 2020</div>
                <div className={styles.date}>January 2020</div>
                <div className={styles.date}>January 2020</div>
                <div className={styles.date}>January 2020</div>
                <div className={styles.date}>January 2020</div>
                <div className={styles.date}>January 2020</div>
                <div className={styles.date}>January 2020</div>
                <div className={styles.date}>January 2020</div>
                <div className={styles.date}>January 2020</div>
                <div className={styles.date}>January 2020</div>
                <div className={styles.date}>January 2020</div>
                                            
        </div>
     )
 }
 export default NavMenu;