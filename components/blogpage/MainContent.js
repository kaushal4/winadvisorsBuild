import React from "react";
import styles from "../../styles/blogstyle.module.css";
import BlogTile from "./BlogTile.js";
import blogdata from "../../public/blogdata.js";
import dynamic from "next/dynamic";
class MainContent extends React.Component {
  constructor() {
    super();
    this.state = {
      blogs: blogdata,
    };
  }
  componentDidMount = () => {
    this.getBlogData();
  };
  getBlogData = async () => {
    debugger;
    if (this.props.yearMon) {
      let data;
      try {
        data = (
          await import(`../../public/blogData/${this.props.yearMon || ""}`)
        ).default;
      } catch {
        data = blogdata;
      }
      debugger;
      this.setState({ blogs: data });
    }
  };
  render() {
    const blogComponents = this.state.blogs.map((blog) => (
      <BlogTile key={blog.blogid} content={blog} id={blog.blogid} />
    ));
    return <div className={styles.maincontent}>{blogComponents}</div>;
  }
}
export default MainContent;
