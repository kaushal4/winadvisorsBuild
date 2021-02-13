import React from "react"
import Navbar from "../components/navbar/Navbar"
import ImageBar from "../components/ImageBar"
import style from "../styles/india.module.css"

function Text(props){
    return(
        <div>
            <div className={style.Line}>
            <figure>
                <img src={props.img} alt={props.text} />
            </figure>
        <div className={style.Text}>
            <span>{props.text}</span> 
        </div>
        
        </div>
        <div className={style.arrowSymbol}>
            <div className={style.square} />
            <div className={style.triangle} />
        </div>
        </div>
        
    )
}


class SlideShow extends React.Component{
    constructor(){
        super();
        this.textArr=["You approach us with intention to start you business in India","Our following process startd for setting up your business in India","Registration of your company in India","Provision for resident Director","Foreign investment approval","Obtaining necessary licenses","Business consultancy","Searching/Obtaining office space","Support in preparing office infrastructure","Import Export consultancy","Human Resource management support"];
        this.imgArr = [];
        for(let i=1;i<12;i++){
            this.imgArr.push(`/images/india${i}.jpg`);       
        }
    }
    render(){
        let Texts = this.textArr.map((element,index)=>{return(<Text text={element} img={this.imgArr[index]} key={index}/>)})
        return(
            <div className={style.lineContainer}>
                {Texts }
            </div>
        )
    }
}

export default class India extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <Navbar />
                <ImageBar imageLocation="/images/tax (2).jpg" text="India Entry"/>
                <SlideShow />
            </div>
        )
    }
}