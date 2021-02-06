import React from 'react';
import styles from '../../styles/blogstyle.module.css'
class BlogTile extends React.Component{
    render(){
        return(
            <div className={styles.blogTile}>
                <img src={this.props.content.blogimgurl}></img>
                <h1>{this.props.content.blogtitle}</h1>
                <p>{this.props.content.blogstart}</p>
                <small >{this.props.content.blogdate}</small>
                <button >Read More</button>
            </div>
            )
    }    
}

export default BlogTile;