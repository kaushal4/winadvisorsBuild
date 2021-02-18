import React from "react"
import style from "../../styles/MiddleForm.module.css"
export default class MiddleForm extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className={style.mainContainer}>
                <figure>
                    <img src="/Images/main2_3.jpg" />
                    <p>Do you think Virtual CFO is the need of time?</p>
                    <p id={style.formText}>Talk to expert</p>
                </figure>
                <figure>
                <img src="/Images/main1_1.jpg" />
                <p>Did you see the scope and decide to enter in India?</p>
                </figure>
                <form>
                    <input type="text" placeholder="Your Name"/><br/>
                    <input type="text" placeholder="Your Phone No."/>
                    <button className={style.button}>submit</button>
                    
                </form>
            </div>
        )
    }
}