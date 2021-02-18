import React,{useEffect,useState} from "react"
import Navbar from "../components/navbar/Navbar"
import ImageBar from "../components/ImageBar"
import style from "../styles/india.module.css"
import FixedNavigator from "../components/FixedNavigator"
import Footer from "../components/footer"
function Text(props){
    let TextClasses=`${style.Text} ${style.init}`
    let ImgClasses = `${style.init}`
    
    if(props.activate==true){
        TextClasses=`${style.Text}`;
        ImgClasses=``;
    }
    return(
        <div>
            <div className={style.Line}>
            <figure className={ImgClasses}>
                <img src={props.img} alt={props.text} />
            </figure>
            <div className={TextClasses}>
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
        this.textArr=["You approach us with intention to start you business in India","Our following process startd for setting up your business in India","Registration of your company in India","Provision for resident Director","Foreign investment approval","Obtaining necessary licenses","Business consultancy","Searching/ Obtaining office space","Support in preparing office infrastructure","Import Export consultancy","Human Resource management support"];
        this.imgArr = [];
        for(let i=1;i<12;i++){
            this.imgArr.push(`/images/india${i}.jpg`);       
        }
    }
    render(){
        let Texts = this.textArr.map((element,index)=>{return(<Text text={element} img={this.imgArr[index]} key={index} activate={this.props.activate[index]}/>)})
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
        this.handleScroll = this.handleScroll.bind(this);
        this.flag=true;
        this.state ={value:0,
            lineArr : [...Array(11).fill(false)],
        }
        this.checkImages = this.checkImages.bind(this)
    }
    checkImages(posy){
        if(this.flag){
            let count=0;
            for(let i=0;i<11;i++){
                if(this.elements[i][1] && this.elements[i][0]<this.window+posy){
                    this.setState((prevState)=>{
                        let tempArr= [...prevState.lineArr];
                        tempArr[i]=true;
                        return({lineArr:tempArr})
                    });
                    this.elements[i][1]=false;
                }
                if(!this.elements){
                    count+=1;
                }
                
            }
            if(count>=11){this.flag=false}
        }
    }
    componentDidMount(){
        window.addEventListener("scroll",this.handleScroll);
        window.addEventListener("resize",()=>{this.vh = window.innerHeight*0.01;
            let body = document.getElementsByTagName("BODY")[0];
            if(window.innerWidth>760){
                body.style.width=`${(document.documentElement.clientWidth- 60)}px`;
            }else{
                body.style.width=`${(window.innerWidth)}px`;
            }
            })
        this.vh = window.innerHeight*0.01;
        if(window.innerWidth>760){
            let body = document.getElementsByTagName("BODY")[0];
            body.style.width=`${(document.documentElement.clientWidth - 60)}px`;
        }
        //text and image animation logic
        this.elements = [...document.querySelectorAll(`.${style.Line}`)].map((element)=>{return([element.getBoundingClientRect().top,true])});
        this.window = window.innerHeight;
        this.checkImages(0);
    }
    handleScroll(){
        let posy = window.scrollY;
        if(posy>15*this.vh){
            
            if(this.state.value===0) {this.setState(()=>{return({value:1})})}
            
        }else if(this.state.value!==0){
            this.setState(()=>{return({value:0})})
        }
        this.checkImages(posy);
        }
    render(){
        return(
            <div>
                <FixedNavigator />
                <Navbar value={this.state.value}/>
                <ImageBar imageLocation="/images/tax (2).jpg" text="India Entry"/>
                <SlideShow activate={this.state.lineArr}/>
                <Footer />
            </div>
        )
    }
}