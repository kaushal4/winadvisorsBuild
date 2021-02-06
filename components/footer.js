import React from "react"
import style from "../styles/footer.module.class"



class Footer extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="footerContainer">
                <div className="upperContainer">
                    <div>
                    </div>
                    <div>
                    </div>
                </div>
                <p>{`Copyright © All Rights Reserved. 2021, winadvisors | TERMS OF USE | PRIVACY POLICY`}</p>
            </div>
        )
    }
}