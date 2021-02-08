import React from 'React';
import styles from '../../styles/contactus.module.css'
class SideBar extends React.Component{
    render(){
        
            let fixed=null;
            if(this.props.position){fixed=styles.fixed}
            return(
            <div className={`${styles.sidebar} ${fixed}`}>
                     
            <div className={styles.blogh5}>Corporate Office</div>
            
            <div className={styles.thinseparatorline}></div>
                <div className={styles.date}>
                <p>Kandivali</p>
                <p>407,4th Floor,Sanjar Enclave,Opposite-PVR Cinema, S.V.Road, Kandivali(West), Mumbai 400 067</p>
                </div>
                <div className={styles.date}>
                <p>Dubai</p>
                <p>28H Almas Towers, JLT, P O Box 78119, Dubai, United Arab Emirates</p>
                </div>
                <div className={styles.date}>
                <p>Hongkong</p>
                <p>Head Office (Reception): Rm 1501, 15/F, Eastern Commercial Ctr., 397 Hennessy Rd., Wanchai, Hong Kong | Business Centre: Rm 1206, 12/F #same building</p>
                </div>
                                            
        </div>
        )
    }
}
export default SideBar;
