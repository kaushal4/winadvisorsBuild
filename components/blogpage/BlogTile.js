import React from "react";
import styles from "../../styles/blogstyle.module.css";
class BlogTile extends React.Component {
  constructor() {
    super();
    this.state = { expand: false, moreorless: "more" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevVal) => {
      if (prevVal.moreorless === "more") {
        return { expand: true, moreorless: "less" };
      }
      if (prevVal.moreorless === "less") {
        return { expand: false, moreorless: "more" };
      }
    });
  }
  render() {
    return (
      <div className={styles.blogTile} id={this.props.id}>
        <img src={this.props.content.blogimgurl}></img>
        <h1>{this.props.content.blogtitle}</h1>
        <p>{this.props.content.blogstart}</p>
        <div
          className={
            this.state.expand ? styles.showfulltext : styles.hiddenfulltext
          }
        >
          <p>{this.props.content.blogfull}</p>
        </div>
        <small>{this.props.content.blogdate}</small>
        <button onClick={this.handleClick}>Read {this.state.moreorless}</button>
      </div>
    );
  }
}

export default BlogTile;
