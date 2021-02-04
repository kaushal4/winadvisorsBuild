import imageStyle from "../styles/Imagefile.module.css"


function ImageBar(props){
    return(
        <div className={`imageContainer ${imageStyle.Container}`}>
            <img src={props.imageLocation} alt="imageNotLoaded" className={imageStyle.innerImage}/>
            <p className={imageStyle.text}>{props.text}</p>
        </div>
    )
}

export default ImageBar;