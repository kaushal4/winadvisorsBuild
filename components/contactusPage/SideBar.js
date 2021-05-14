import React from "react";
import styles from "../../styles/contactus.module.css";
class SideBar extends React.Component {
  constructor() {
    super();

    this.images = [
      [
        "/symbols/facebbook.png",
        "https://www.facebook.com/WIN-CORPORATE-ADVISORS-193426394758642",
      ],
      [
        "/symbols/linkedin.png",
        "https://www.linkedin.com/company/wincorporateadvisors/",
      ],
      ["/symbols/twitter.png", "https://twitter.com/AdvisorsWin"],
      ["/symbols/whatsapp.png", "https://wa.me/+919082114257"],
    ];
  }
  render() {
    let fixed = null;
    const images = this.images.map((element, index) => {
      return (
        <img
          src={element[0]}
          key={index}
          alt="icon did not load"
          onClick={() => {
            window.location.href = element[1];
          }}
        />
      );
    });
    if (this.props.position) {
      fixed = styles.fixed;
    }
    return (
      <div className={`${styles.sidebar} ${fixed}`}>
        <hr></hr>
        <div className={styles.blogh5}>FOLLOW US</div>
        <hr></hr>
        <table>
          <tr>
            <td>{images[0]}</td>
            <td>{images[1]}</td>
          </tr>
          <tr>
            <td>{images[2]}</td>
            <td>{images[3]}</td>
          </tr>
        </table>

        <hr></hr>

        <div className={styles.blogh5}>Corporate Office</div>
        <hr></hr>
        <div className={styles.date}>
          <img src="./images/gateway of india.jpg"></img>
          <b>KANDIVALI</b>
          <p>
            407,4th Floor,Sanjar Enclave,Opposite-PVR Cinema, S.V.Road,
            Kandivali(West), Mumbai 400 067
          </p>
        </div>
        <hr></hr>
        <div className={styles.date}>
          <img src="./images/twintowers.jpg"></img>
          <b>DUBAI</b>
          <p>
            28H Almas Towers, JLT, P O Box 78119, Dubai, United Arab Emirates
          </p>
        </div>
        <hr></hr>
        <div className={styles.date}>
          <img src="./images/hongkongtower.jpg"></img>
          <b>HONGKONG</b>
          <p>
            Head Office (Reception): Rm 1501, 15/F, Eastern Commercial Ctr., 397
            Hennessy Rd., Wanchai, Hong Kong | Business Centre: Rm 1206, 12/F
            #same building
          </p>
        </div>
        <hr></hr>
      </div>
    );
  }
}
export default SideBar;
