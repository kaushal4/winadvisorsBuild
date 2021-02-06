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
            <button className="dropdown" onMouseEnter={()=>{props.handeldropbox(0)}} onMouseLeave={()=>{props.handeldropboxLeave(true)}}>What We Do<img src="/symbols/dropdown.png" className="symbols"/></button>
            <div className={`block-3 ${props.mousepos?"dropdownMenu":""}`} onMouseEnter={()=>{props.mousepos?props.handeldropbox(1):props.handeldropbox(false)}} onMouseLeave={()=>{props.handeldropboxLeave(false)}}>
                <div className="nav-line"></div>
                <button>India entry</button>
                <div className="nav-line"></div>
                <button >Virtual CFO</button>
                <div className="nav-line"></div>
                <button ><Link href="/tax"><a>tax and regulatory</a></Link></button>
                <div className="nav-line"></div>
                <button >360° Assistant</button>
                <div className="nav-line"></div>
            </div>
            
            <div className="nav-line"></div>
            <button ><Link href="/blog"><a>Blog</a></Link></button>
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
            mouseDropbox:false,
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.handeldropbox = this.handeldropbox.bind(this);
        this.handelMouseLeave = this.handelMouseLeave.bind(this);
        this.enteredBlock = false;
    }
    handleClick(){
        location.href = "/";
    }
    handeldropbox(dropbox){
        if(dropbox===0){
            this.setState(()=>{
                return({mouseDropbox:true});
            })
        }else if(dropbox===1){
            this.enteredBlock = true;
        }
        
    }
    handelMouseLeave(dropbox){
        if(dropbox){
            setTimeout(()=>{
                if(!this.enteredBlock){
                    this.enteredBlock=false;
                    this.handelMouseLeave(false);
                }
                
            },300);
        }else{
            this.enteredBlock=false;
            this.setState(()=>{
                return({mouseDropbox:false});
            })
        }
        
        
    }
    componentDidMount(){
        let size = document.querySelector(".block-2> div > button");
        document.querySelector(".block-3").style.left = (size.offsetWidth)*1.10+"px";
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
                <img src={"/images/WIN logo.jpg"} alt={`could not load logo`} onClick={this.handleClick}/>
                <div className={`block-2 ${this.state.move}`}>

                    <Block2 hideState={this.state.clickState} mousepos={this.state.mouseDropbox} handeldropbox={this.handeldropbox} handeldropboxLeave={this.handelMouseLeave}/>
                    <Hamburger clickHandler={this.clickHandler} rotate={this.state.rotate} />
                </div>
                
            </nav>
        )
    }
}

export default Navbar 