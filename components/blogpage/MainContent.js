import React from 'react';
import styles from '../../styles/blogstyle.module.css'
import BlogTile from './BlogTile.js'
import blogdata from '../../public/blogdata.js'
class MainContent extends React.Component{
    constructor(){
        super()
        this.state={
            blogs:blogdata
        }
    }
    render(){
        const blogComponents=this.state.blogs.map(blog => <BlogTile key={blog.blogid} content={blog} />)
         return(
            <div className={styles.maincontent}>
                {blogComponents}          
            </div>
         )
    }
 }
 export default MainContent;