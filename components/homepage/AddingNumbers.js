import React from "react"

function AddNumber(props){
    return(
        <div>
        <span>{props.value}<br />{props.name}</span>
        </div>
    )
}

export default AddNumber