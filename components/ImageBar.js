import imageStyle from "../styles/Imagefile.module.css"
import React from 'react';

class ImageBar extends React.Component{
    render(){
        return(
            <div className={`imageContainer ${imageStyle.Container}`}>
                <img src={this.props.imageLocation} alt="imageNotLoaded" className={imageStyle.innerImage}/>
                <p className={imageStyle.text}>{this.props.text}</p>
            </div>
        )
    }
}

export default ImageBar;