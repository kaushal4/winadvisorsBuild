import React from "react"

function Hamburger(props){
    return(
        <div className={`${props.rotate} hamburger`} onClick={props.clickHandler}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
    </div>
    )
}

export default Hamburger;