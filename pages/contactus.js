import React from 'react';
import Navbar from "../components/navbar/Navbar";
import Main from "../components/Main";
import styles from '../styles/contactus.module.css';
import ImageBar from '../components/ImageBar';
import SideBar from '../components/contactusPage/SideBar.js'
import MainPage from '../components/contactusPage/MainPage.js'
import Footer from '../components/footer.js'

class ContactUs extends React.Component{
    constructor(){
        super();
        this.handleScroll = this.handleScroll.bind(this);
        this.state ={value:0,archive:false}
    }
    componentDidMount(){
        window.addEventListener("scroll",this.handleScroll);
        window.addEventListener("resize",()=>{this.vh = window.innerHeight*0.01;})
        this.vh = window.innerHeight*0.01;
        
    }
    handleScroll(){
        let posy = window.scrollY;
        console.log(posy+" "+35*this.vh+" "+50*this.vh+" ")
        if(posy>15*this.vh){
            
            if(this.state.value===0) {this.setState(()=>{return({value:1})})}
            
        }else if(this.state.value!==0){
            this.setState(()=>{return({value:0})})
        }
        if(posy>=42.5*this.vh && window.innerWidth>768){
            this.setState({archive:true})
        }else{
            this.setState({archive:false})
        }
    }
    render(){
        return(
            <div>
                <Navbar value={this.state.value}/>
                <ImageBar imageLocation="/images/blogimg2.jpg" text="Contact Us"/>
                <div className={styles.container}>
                
                <MainPage/>
                <SideBar position={this.state.archive}/>
                
                </div>
                <Footer/>
            </div>
        )
    }
}
export default ContactUs;