import React from 'react';
import styles from '../../styles/blogstyle.module.css'
function BlogTile(props){
    return(
    <div className={styles.blogTile}>

        
        <img src={props.content.blogimgurl}></img>
        <h1>{props.content.blogtitle}</h1>
        <p>{props.content.blogstart}</p>
        <small >{props.content.blogdate}</small>
        <button >Read More</button>
    </div>
    )
}

export default BlogTile;