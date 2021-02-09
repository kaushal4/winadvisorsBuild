import React from "react"
import Navbar from "../components/navbar/Navbar"
import ImageBar from "../components/ImageBar"
import style from "../styles/movingCards.module.css"
import Footer from "../components/footer"


function MovingCards(props){
    return(
        <div className={style.movingContainer}>
            <div className={style.imageContainer} style={{top:`${props.top}px`}}>
                <img src="/images/work.jpg" alt="image not loaded" />
            </div>
            <div className={style.cardContainer}>
                <div className={style.front}> this is the front
                </div>
                <div className={style.back}> this is the back
                </div>
            </div>
        </div>
    )
}
class App extends React.Component{
    constructor(){
        super();
        this.handleScroll = this.handleScroll.bind(this);
        this.state ={value:0,
            card1:undefined,
            card2:undefined,
            card3:undefined,
            card4:undefined,
        }
        this.offset=[undefined,undefined,undefined,undefined]
    }
    componentDidMount(){
        window.addEventListener("scroll",this.handleScroll);
        window.addEventListener("resize",()=>{this.vh = window.innerHeight*0.01;this.window=window.innerHeight})
        this.window = window.innerHeight;
        this.vh = window.innerHeight*0.01;
        this.cards = [...document.querySelectorAll(`.${style.movingContainer}`)];
        let boundingDetails = this.cards.map((element)=>{return(element.getBoundingClientRect())})
        this.top = boundingDetails.map((element)=>{return(element.top)});
        this.bottom = boundingDetails.map((element)=>{return(element.bottom)});
        this.proportion= this.top.map((element,index)=>{return((0.50*(this.bottom[index]-element))/(this.window+(this.bottom[index]-element)))})
        this.offset=this.top.map((element,index)=>{return((75/100)*(this.bottom[index]-element))})
    }
    handleScroll(){
        let posy = window.scrollY;
        if(posy>15*this.vh){
            
            if(this.state.value===0) {this.setState(()=>{return({value:1})})}
            
        }else if(this.state.value!==0){
            this.setState(()=>{return({value:0})})
        }
        if(posy+this.window>this.top[0] && (this.bottom[0]>posy)){
            let displacement = this.proportion[0]*((posy+this.window)-this.top[0]);
            this.setState({
                card1: displacement
            })
        }
        if(posy+this.window>this.top[1] && (this.bottom[1]>posy)){
            let displacement = this.proportion[1]*((posy+this.window)-this.top[1]);
            this.setState({
                card2: displacement
            })
        }
        if(posy+this.window>this.top[2] && (this.bottom[2]>posy)){
            let displacement = this.proportion[2]*((posy+this.window)-this.top[2]);
            this.setState({
                card3: displacement
            })
        }
        if(posy+this.window>this.top[3] && (this.bottom[3]>posy)){
            let displacement = this.proportion[3]*((posy+this.window)-this.top[3]);
            this.setState({
                card4: displacement
            })
        }
    }
    
    render(){
        return(
            <div>
                <Navbar value={this.state.value}/>
                <ImageBar imageLocation="/images/tax (2).jpg" text="Tax and Regulatory"/>
                
                <MovingCards top={(this.offset[0]-this.state.card1)}/>
                <MovingCards top={(this.offset[1]-this.state.card2)}/>
                <MovingCards top={(this.offset[3]-this.state.card3)}/>
                <MovingCards top={(this.offset[2]-this.state.card4)}/>
                <Footer />
                
            </div>
        )
    }
}

export default App
