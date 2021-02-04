import React from 'react';
import styles from '../../styles/blogstyle.module.css'
 function MainContent(){
     return(
        <div className={styles.maincontent}>
            
           
            
            {//<div className={styles.blogtile}>
                
            //  <div className={styles.blogimg}>
            //  <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1172&q=80"></img>
            //  </div>
                
            //   <h3>THIS BLOG POST TELLS ABOUT FINANCE!</h3>
            //  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at tortor pulvinar, auctor turpis sit amet, facilisis lacus. Donec sed urna quis diam iaculis facilisis. Cras tempus eget felis eu varius. Integer scelerisque non massa quis rutrum. Cras mattis nisi et luctus facilisis. Praesent vel purus quis risus scelerisque varius. Vestibulum eros lacus, bibendum vel arcu id, mattis iaculis metus. Integer sed suscipit tortor, eget bibendum diam. Praesent lacus sapien, molestie ac porta in, convallis vitae lacus. Cras ac est vitae odio euismod fermentum sed vel velit. Sed eu odio sed nibh laoreet facilisis nec ac arcu. Maecenas sollicitudin risus ac libero imperdiet mollis non non ex. Praesent faucibus euismod dolor quis dignissim. Mauris pharetra varius leo ut molestie. Vivamus non diam lacinia, iaculis mi quis, ullamcorper nunc.

            //Nunc ut urna at tortor tincidunt ullamcorper in in orci. Nullam eros ante, mattis eget urna at, imperdiet sagittis dolor. Nullam dictum dignissim purus, nec ultricies quam rhoncus eu. Aliquam risus orci, varius vitae mattis porttitor, interdum vel nulla. Aenean vel rhoncus nisl, quis sagittis mi. Duis sed sem a erat maximus commodo. Mauris vel pretium orci, vitae tincidunt augue. Fusce efficitur consequat odio, et hendrerit arcu bibendum in. Phasellus purus nulla, efficitur sit amet suscipit quis, ultrices et quam. Aliquam erat volutpat.</p>
            //</div>
        }
            <div className={styles.card,styles.mb3}>
                <img className={styles.cardimgtop} src="https://specials-images.forbesimg.com/imageserve/5f492b71ee4055766258e438/960x0.jpg?fit=scale" alt="Card image cap"></img>
                <div className={styles.cardbody}>
                    <h5 className={styles.cardtitle}>Card title</h5>
                    <p className={styles.cardtext}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className={styles.cardtext}><small className={styles.textmuted}>Last updated 3 mins ago</small></p>
                </div>
            </div>
            {//<div className={styles.blogtile}></div>
           // <div className={styles.blogtile}></div>
            //<div className={styles.blogtile}></div>
            //<div className={styles.blogtile}></div>
           //</div> <div className={styles.blogtile}></div>
            }
        </div>
     )
 }
 export default MainContent;