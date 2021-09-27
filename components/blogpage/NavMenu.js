import React from "react";
import styles from "../../styles/blogstyle.module.css";
import Link from "next/link";
import { withRouter } from "next/router";
class NavMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    let archive = [];
    try {
      archive = (await import(`../../public/blogData/archive`)).default;
    } catch {
      console.log("archive could not be loaded");
    }
    debugger;
    this.setState({ data: archive });
  }
  handleClick = () => {
    debugger;
    this.props.router.refresh();
  };
  render() {
    let fixed = null;
    if (this.props.position) {
      fixed = styles.fixed;
    }
    return (
      <div className={`${styles.navigationmenu} ${fixed}`}>
        <div className={styles.blogh5}>ARCHIVE</div>
        <div className={styles.thinseparatorline}></div>
        {this.state.data.map((element) => {
          return (
            <div>
              <Link href={element.link} passHref={true}>
                <a className={styles.date} onClick={this.handleClick}>
                  {element.name}
                </a>
              </Link>
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}
export default withRouter(NavMenu);
