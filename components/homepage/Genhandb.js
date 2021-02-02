import React from "react"

function Genhandb(props){
    return(
        <div className={`Genhandb`}>
            <h1>{props.title}</h1>
            <p>{props.body}</p>
            <button>{props.but}</button>
        </div>
    )
}

export default Genhandb;