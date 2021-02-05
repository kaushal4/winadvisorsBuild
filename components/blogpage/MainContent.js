import React from 'react';
import styles from '../../styles/blogstyle.module.css'
import BlogTile from './BlogTile.js'
import blogdata from '../../public/blogdata.js'
 function MainContent(){
     const blogComponents=blogdata.map(blog =>
        <BlogTile key={blog.blogid} content={blog} />
     )
     return(
        <div className={styles.maincontent}>
            {blogComponents}          
        </div>
     )
 }
 export default MainContent;