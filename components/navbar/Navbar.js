import React from "react";
import Hamburger from "./Hamburger"
import Link from "next/link"

function Block2(props){
    let t="hidden"
    if(props.hideState===false){t=""}
    return(
        <div className={`buttons ${t}`}>
            <div className="nav-line"></div>
            <button >Who we are</button>
            <div className="nav-line"></div>
            <button >
                <Link href="/services">
                <a >What We Do</a>
                </Link>
                </button>
            <div className="nav-line"></div>
            <button >Blog</button>
            <div className="nav-line"></div>
            <button>contact us</button>
            <div className="nav-line"></div>
        </div>
    )
}


class Navbar extends React.Component{
    
    constructor(){
        super();
        this.state = {
            clickState:true,
            rotate:"toggle",
            move:"",
        }
        this.clickHandler = this.clickHandler.bind(this);
        
    }
    clickHandler(){
        this.setState((prevState)=>{
            if(prevState.clickState){return {clickState:false,rotate:"toggle rotate"}}
            else return {clickState:true,rotate:"toggle"}
        })
    }
    componentDidUpdate(prevprops,prevstate){
        if(this.props.value===1 && prevprops.value===0){
            this.setState(()=>{
                return({move:"move"});
            })
        }else if(prevprops.value===1 && this.props.value===0){
            this.setState(()=>{
                return({move:""});
            })
        }
    }
    render(){
        return(
            <nav className="nav">
                <div className="block-1"></div>
                <img src={"/images/WIN logo.jpg"} alt={`could not load logo`} />
                <div className={`block-2 ${this.state.move}`}>

                    <Block2 hideState={this.state.clickState}/>
                    <Hamburger clickHandler={this.clickHandler} rotate={this.state.rotate} />
                </div>
                
            </nav>
        )
    }
}

export default Navbar 