import React from "react"
import style from "../styles/footer.module.css"
import Link from "next/link"

class Footer extends React.Component{
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.state={
            email:"",
            emailSuccess:false,
            emailfail:false,
            loading:false,
        }
        this.images = [["/symbols/facebbook.png","https://www.facebook.com/WIN-CORPORATE-ADVISORS-193426394758642"],["/symbols/linkedin.png","https://www.linkedin.com/company/wincorporateadvisors/"],["/symbols/twitter.png","https://twitter.com/AdvisorsWin"]]
    }
    onEmailChange(e){
        const {name,value} = e.target;
        this.setState({
            email:value
        })
    }
    onSubmit(e){
        e.preventDefault();
        this.setState({loading:true});
        setTimeout(()=>{
            this.setState({
                email:"",emailfail:true,
            })},1000)
    }

    render(){
        let emailSuccess = null;
        let emailfail = style.hide;
        const images = this.images.map((element,index)=>{return(<img src={element[0]} key={index} alt="icon did not load" onClick={()=>{window.location.href = element[1];}}/>)})
        if(this.state.emailSuccess==true){emailSuccess=style.show}
        else if(this.state.loading==true){emailfail=null}
        return(
            <div className={style.footerContainer}>
                <div className={style.upperContainer}>
                    <div className = {style.aboutUsContainer}>
                        <h4>About us</h4>
                        <p>he are the best conssultancy in the world.This is just dummy text..This is just dummy text..This is just dummy text..This is just dummy text.</p>
                        {images}
                        <p style={{marginBottom:0}}>Group websites:</p>
                        <Link href="/"><a>website-1</a></Link><br/>
                        <Link href="/"><a>website-2</a></Link>
                        <a></a>
                    </div>
                    <div className={style.subscribeContainer}>
                        <h4>Subscribe <br/>to our newslatter</h4>
                        <form onSubmit={this.onSubmit}>
                            <input type="text" placeholder="enter your email" value={this.state.email} onChange={this.onEmailChange}/>
                            <div className={`${style.failureMessage} ${emailfail}`}>{this.state.emailfail?"error .Please try again later":"loading..."}</div>
                            <button className={`${style.button}`}>submit</button>
                        </form>
                    </div>
                    <div className={`${style.cover} ${emailSuccess}`}>
                            <h1>Subscribed!</h1>
                    </div>
                </div>

                <p className={style.footerText}>{`Copyright © All Rights Reserved. 2021, winadvisors | TERMS OF USE | PRIVACY POLICY`}</p>
            </div>
        )
    }
}

export default Footer;