import React,{ useState,useEffect } from "react";
import style from "../../styles/carousel.module.css"
// function Carousel(props){
//     const[counter,setCounter]= useState(0);
//     const[direction,setDirection]=useState(-1);
//     const[flag,setFlag]=useState(0);
//     const[hidden,setHidden]=useState(style.hide);
//     const textArr = ["360° Assistance","Start Your Business","Tax and Regulatory","Start you business in India","360° Assistance"];
//     let arr=[]
//     for(let i=0;i<4;i++){
//         arr.push(<div className={style.tab} key={i} onClick={()=>{setDirection(-1);setCounter(i);}}/>)
//     }
//     arr[counter<4?counter:0]= <div className={style.tab} style={{backgroundColor:"#09FBD3"}} key={counter}/>
    
//     useEffect(()=>{
//         setTimeout(()=>{setHidden(null)},500);
//         function timeout(ms) {
//             return new Promise(resolve => setTimeout(resolve, ms));
//         }
//         const autoSlide = async function(counter,autoSlide){
//             if(counter!=4 && counter!=0){await timeout(3000);}
//             else{await timeout(1500);}
//             setDirection(0)
//             if(counter!=4){
//                 setCounter(counter+1);
//             }else{
//                 setCounter(0);
//                 counter=-1;
//             }
//             autoSlide(counter+1,autoSlide);
//         }
//         autoSlide(counter,autoSlide);
//         },[])
//     useEffect(()=>{
//         if(counter==4 && direction==0){
//             setTimeout(()=>{if(counter==4)setCounter(0);},500)
//         }else if(counter==0 && direction==1){
//             setTimeout(()=>{if(counter==0)setCounter(4);},500)
//         }else if(counter==4 && direction==1 && flag==1){
//             setCounter(3);
//             setFlag(0);
//         }else if(counter==0 && direction==0 && flag==1){
//             setFlag(0);
//             setCounter(1);
            
//         }
//     },[counter])

//     return(
//         <div className={style.OuterContainer}>
//             <div className={`${style.Container} ${(counter!=0&&direction==0)||(counter!=4&&direction==1)?style.animate:null}`} style={{transform:`translateX(-${counter*20}%)`}}>
//                 <img src="/images/360.jpg" alt="image of 360° assitance"></img>
//                 <img src="/images/start.jpg" alt="image of start your business in india"></img>
//                 <img src="/images/tax.jpg" alt="image if tax and regulatory"></img>
//                 <img src="/images/india.jpg" alt="image of india entry"></img>
//                 <img src="/images/360.jpg" alt="image of 360° assitance" ></img>
                
//             </div>
//             <div class={`${style.Text} ${hidden}`}>{textArr[counter]}</div>
//             <div className={style.Border}>
//             </div>
//             <div className={style.tabs}>
//             {/* <div className={style.tab}/><div className={style.tab}/><div className={style.tab}/><div className={style.tab}/> */}
//             {arr}
//             </div>
//             <button onClick={()=>{
            
//             setDirection(0)
//             if(counter!=4){
//                 setCounter(counter+1);
//             }else{
//                 setFlag(1);
//                 setCounter(0);
//             }
//         }}>right</button>
//         <div>{`${counter} ${flag} ${direction}`}</div>

        
//         </div>
//     )
// }


export default class Carousel extends React.Component{
    constructor(){
        super();
        this.textArr = ["360° Assistance","Virtual CFO","Tax and Regulatory","Start you business in India","360° Assistance"];
        this.state={
            counter:0,
            direction:-1,
            hidden:style.hide,
        }
        this.handleRight = this.handleRight.bind(this);
        this.stopSlide = this.stopSlide.bind(this);
        this.startSlide = this.startSlide.bind(this);
    }
    startSlide(){
        console.log("out");
        this.slideInterval = setInterval(()=>{
            this.handleRight();
        },3000)
    }
    stopSlide(){
        console.log("here");
        clearInterval(this.slideInterval)
    }
    async handleRight(){
        this.setState({direction:0})
        if(this.state.counter!=4){
            this.setState({counter:this.state.counter+1});
        }else{
            this.setState({counter:0});
        }
        
    }
    componentDidMount(){
        setTimeout(()=>{this.setState({hidden:null})},500);
        this.slideInterval = setInterval(()=>{
            this.handleRight();
        },2000)
    }
    componentDidUpdate(){
        if(this.state.counter==4 && this.state.direction==0){
            console.log("here");
            setTimeout(()=>{this.setState({counter:0})},500);
        }
    }
    render(){
        let arr=[];
        for(let i=0;i<4;i++){
                    arr.push(<div className={style.tab} key={i} onClick={()=>{if(window.innerWidth<720){this.stopSlide()};this.setState({counter:i,direction:-1})}}/>)
                }
                arr[this.state.counter<4?this.state.counter:0]= <div className={style.tab} style={{backgroundColor:"#09FBD3"}} key={this.state.counter}/>
        return(
            <div className={style.OuterContainer} onMouseEnter={this.stopSlide} onMouseLeave={this.startSlide}>
            <div className={`${style.Container} ${(this.state.counter!=0&&this.state.direction==0)||(this.state.counter!=4&&this.state.direction==1)?style.animate:null}`} style={{transform:`translateX(-${this.state.counter*20}%)`}} >
                <img src="/images/360.jpg" alt="image of 360° assitance"></img>
                <img src="/images/start.jpg" alt="image of start your business in india"></img>
                <img src="/images/tax.jpg" alt="image if tax and regulatory"></img>
                <img src="/images/india.jpg" alt="image of india entry"></img>
                <img src="/images/360.jpg" alt="image of 360° assitance" ></img>
                
            </div>
            <div class={`${style.Text} ${this.state.hidden} ${this.state.counter==3?style.smaller:null}`}>{this.textArr[this.state.counter]}</div>
            <div className={style.Border}>
            </div>
            <div className={style.tabs}>
            {/* <div className={style.tab}/><div className={style.tab}/><div className={style.tab}/><div className={style.tab}/> */}
            {arr}
            </div>
        </div>
        )
    }
}