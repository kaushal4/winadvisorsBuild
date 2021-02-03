import React from "react"
import Images from "next/image"
import style from "../../styles/arrow.module.css"
function Image(props){
    return(
        <div >
            <div className={props.imageArr[0]} >
                <img src={"/images/placeholder-1.jpg"} alt="img not found" width="64" height="64" ></img>
            </div>
            <div className={props.imageArr[1]} >
                <img src={"/images/placeholder-2.jpg"} alt="img not found" width="64" height="64"></img>
            </div>
            <div className={props.imageArr[2]}  >
                <img src={"/images/placeholder-3.jpg"} alt="img not found" width="64" height="64"></img>
            </div>
            <div className={props.imageArr[3]} >
                <img src={"/images/placehoolder-4.jpg"} alt="img not found" width="64" height="64"></img>
            </div>
        </div>
    )
}

class SlidingImages extends React.Component{
    constructor(){
        super();
        this.state={
            imageArr : ["image-1 top1","image-2","image-3","image-4"],
            current: 0,
            hover: "hidden",
        }
        this.handleRight = this.handleRight.bind(this);
        this.handleLeft = this.handleLeft.bind(this);
        this.autoSlide = setInterval(this.handleRight,3000);
        this.stopSliding = this.stopSliding.bind(this);
        this.startSliding = this.startSliding.bind(this);
    }
    startSliding(){
        this.autoSlide = setInterval(this.handleRight,3000);
        this.setState(()=>{
            return{hover:"hidden"}
        })
    }
    stopSliding(){
        clearInterval(this.autoSlide);
        this.setState(()=>{
            return{hover:"visible"}
        })
    }
    handleLeft(){
        let count=0;
        let tempArr = [...this.state.imageArr]
        if(this.state.current===0){count=3}else{count=(this.state.current-1)}
        tempArr[(count)] = `image-${((count)+1)} top1 slideinLeft`;
        tempArr[(this.state.current)] = `image-${((this.state.current)+1)} top2`;
        tempArr[(this.state.current+1)%4]=`image-${((this.state.current+1)%4)+1}`;
        this.setState(()=>{return {imageArr:tempArr , current:((count))}});
    }
    handleRight(){
        let tempArr = [...this.state.imageArr]
        if(this.state.current===0){tempArr[3] = `image-4`}
        else{tempArr[(this.state.current-1)%4] = `image-${(((this.state.current-1)%4)+1)}`}
        tempArr[(this.state.current)] = `image-${((this.state.current)+1)} top2`
        tempArr[(this.state.current+1)%4]=`image-${((this.state.current+1)%4)+1} top1 slideinRight`
        this.setState(()=>{return {imageArr:tempArr , current:((this.state.current+1)%4)}});
    }
    render(){
        return(
        <div className="imageContainer"  onMouseEnter={this.stopSliding} onMouseLeave={this.startSliding}>
            <Image imageArr={this.state.imageArr}/>
            <i className={`${style.arrow} ${style.right}`} onClick={this.handleRight} style={{visibility:this.state.hover}}></i>
            <i className={`${style.arrow} ${style.left}`} onClick={this.handleLeft} style={{visibility:this.state.hover}}></i>
        </div>
        )
    }
}

export default SlidingImages


