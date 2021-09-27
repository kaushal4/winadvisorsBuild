import StandardCard from "./StandardCard"
import styles from "../../styles/utilities/backImages.module.css"
import React,{useState} from "react";
const BackImages = ({ imageSource, width, height,containerCss,containerMargin }) => {
  const [mouseIn,setMouseIn] = useState(false);
  const handleMouseEnter = ()=>{
    setMouseIn(!mouseIn);
  }
  let dummy = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, consequuntur impedit odit eligendi libero, veritatis dolore earum distinctio cumque deleniti totam amet, dignissimos fuga fugit voluptatum blanditiis? Sint, quia aliquid."

  const imageCss = {
    width: width,
    height: height,
  };
  return <div style={containerCss} className={styles.container} onMouseEnter={handleMouseEnter.bind(this)} onMouseLeave={handleMouseEnter.bind(this)}>
      <img src={`${imageSource}`} className={styles.image} alt="card images" style={imageCss}/>
      <StandardCard className={styles.mainBody} mouseIn={mouseIn} header="This is a header" cardBody="dummy"></StandardCard>
  </div>;
};

export default BackImages;

