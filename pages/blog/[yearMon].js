import { useRouter } from "next/router";

import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Main from "../../components/Main";
import NavMenu from "../../components/blogpage/NavMenu.js";
import MainContent from "../../components/blogpage/MainContent.js";
import Footer from "../../components/blogpage/Footer.js";
import ImageBar from "../../components/ImageBar";
import styles from "../../styles/blogstyle.module.css";

const yearMonSanitizer = (yearMon) => {
  const month = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  let re = /^[0-9]*$/;
  const year = yearMon && yearMon.slice(-4);
  const mon = yearMon && yearMon.slice(0, 3);
  if (month.find((element) => element === mon) && re.test(year)) return true;
  return false;
};

export async function getServerSideProps(content) {
  const { yearMon } = content.query;
  let defaultLinkAvailable = true;
  let data = "";
  try {
    data = (await import(`../../public/blogData/defaultLink`)).default;
  } catch {
    console.log("invalid default link");
    flag = false;
  }

  if (defaultLinkAvailable && !yearMonSanitizer(yearMon)) {
    console.log("at redirection!");
    console.log(yearMon);
    return {
      redirect: {
        destination: `/blog/${data}`,
        permanent: false,
      },
    };
  }
  return { props: { yearMon } };
}

class App extends React.Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.state = { value: 0, archive: false };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", () => {
      this.vh = window.innerHeight * 0.01;
    });
    this.vh = window.innerHeight * 0.01;
  }
  handleScroll() {
    let posy = window.scrollY;
    console.log(posy + " " + 35 * this.vh + " " + 50 * this.vh + " ");
    if (posy > 15 * this.vh) {
      if (this.state.value === 0) {
        this.setState(() => {
          return { value: 1 };
        });
      }
    } else if (this.state.value !== 0) {
      this.setState(() => {
        return { value: 0 };
      });
    }
    if (posy >= 42.5 * this.vh && window.innerWidth > 768) {
      this.setState({ archive: true });
    } else {
      this.setState({ archive: false });
    }
  }

  render() {
    console.log("in render function!");
    return (
      <div>
        <Navbar value={this.state.value} />
        <ImageBar imageLocation="/images/blogimg2.jpg" text="Blog" />
        <div className={styles.container}>
          <MainContent
            yearMon={this.props.yearMon ? this.props.yearMon : undefined}
          />
          <NavMenu position={this.state.archive} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
