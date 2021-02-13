import React from "react"
import Navbar from "../components/navbar/Navbar"
import Main from "../components/Main"
import Footer from "../components/footer"
import Head from "next/head"
import FixedNavigator from "../components/FixedNavigator"
class App extends React.Component{
    constructor(){
        super();
        this.handleScroll = this.handleScroll.bind(this);
        this.state ={value:0}
    }
    componentDidMount(){
        window.addEventListener("scroll",this.handleScroll);
        window.addEventListener("resize",()=>{this.vh = window.innerHeight*0.01;
            let body = document.getElementsByTagName("BODY")[0];
            if(window.innerWidth>760){
                body.style.width=`${(window.innerWidth - 100)}px`;
            }else{
                body.style.width=`${(window.innerWidth)}px`;
            }
            })
        this.vh = window.innerHeight*0.01;
        if(window.innerWidth>760){
            let body = document.getElementsByTagName("BODY")[0];
            body.style.width=`${(window.innerWidth - 100)}px`;
        }
        
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
                <Head>
                <title>winadvisors</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <script src="https://smtpjs.com/v3/smtp.js"></script>
                </Head>
                <FixedNavigator />
                <Navbar value={this.state.value}/>
                <Main />
                <Footer />
            </div>
        )
    }
}

export default App
