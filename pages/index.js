import Head from 'next/head'
import React from "react"
import Navbar from "../components/navbar/Navbar"
import Main from "../components/Main"


class App extends React.Component{
    constructor(){
        super();
        this.handleScroll = this.handleScroll.bind(this);
        this.state ={value:0}
    }
    componentDidMount(){
        window.addEventListener("scroll",this.handleScroll);
        window.addEventListener("resize",()=>{this.vh = window.innerHeight*0.01;})
        this.vh = window.innerHeight*0.01;
    }
    handleScroll(){
        let posy = window.scrollY;
        if(posy>15*this.vh){
            
            if(this.state.value===0) {this.setState(()=>{return({value:1})})}
            
        }else if(this.state.value!==0){
            this.setState(()=>{return({value:0})})
        }
    }
    
    render(){
        return(
            <div>
                <Navbar value={this.state.value}/>
                <Main />
            </div>
        )
    }
}

export default App
