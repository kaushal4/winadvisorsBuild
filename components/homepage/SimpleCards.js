import style from "../../styles/homepage/simpleCards.module.css"
import BackImages from "../utilities/BackImages"
const SimpleCards =  ()=>{
    const backGroundImages = Array(4).fill("/images/tax.jpg");
    return(
        <div className={style.container}>
            {backGroundImages.map((element)=>{
                return <BackImages className={style.cards} imageSource={element} width={"100%"} height={"40vh"} containerCss={{"display":"flex","justifyContent":"center","alignItems":"center"}} containerMargin="1px"/>
            })}
            
        </div>
    )
}
export default SimpleCards;