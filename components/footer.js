import React from "react"
import style from "../styles/footer.module.css"



class Footer extends React.Component{
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.state={
            email:""
        }
        this.images = [["/symbols/facebbook.png","https://facebook.com"],["/symbols/linkedin.png","https://facebook.com"],["/symbols/twitter.png","https://facebook.com"]]
    }
    onEmailChange(e){
        const {name,value} = e.target;
        this.setState({
            email:value
        })
    }
    onSubmit(e){
        e.preventDefault();
        console.log(this.state.email);
        this.setState({
            email:""
        })
        
    }

    render(){
        const images = this.images.map((element,index)=>{return(<img src={element[0]} key={index} alt="icon did not load" onClick={()=>{window.location.href = element[1];}}/>)})
        return(
            <div className={style.footerContainer}>
                <div className={style.upperContainer}>
                    <div className = {style.aboutUsContainer}>
                        <h4>About us</h4>
                        <p>he are the best conssultancy in the world.This is just dummy text..This is just dummy text..This is just dummy text..This is just dummy text.</p>
                        {images}
                    </div>
                    <div className={style.subscribeContainer}>
                        <h4>Subscribe <br/>to our newslatter</h4>
                        <form onSubmit={this.onSubmit}>
                            <input type="text" placeholder="enter your email!" value={this.state.email} onChange={this.onEmailChange}/>
                            <button>submit!</button>
                        </form>
                    </div>
                </div>
                <p className={style.footerText}>{`Copyright © All Rights Reserved. 2021, winadvisors | TERMS OF USE | PRIVACY POLICY`}</p>
            </div>
        )
    }
}

export default Footer;