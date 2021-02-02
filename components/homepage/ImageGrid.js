import React from "react"


function GridImages(props){
    return(
        <div className="GridElement">
            <img src={props.link} alt={"client name"} />
        </div>
    )
}

class ImageGrid extends React.Component{
    constructor(){
        super();
        this.dimensions = [4,5];
        this.images = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
        this.ImageComponents = this.images.map((element)=>{return(<GridImages link={element}/>)})
    }

    render(){
        return(
            <div className="GridHead">
            <h1>Hello Clients!</h1>
            {this.ImageComponents}
            </div>
        )
    }
}

export default ImageGrid