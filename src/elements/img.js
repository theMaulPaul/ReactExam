import React from "react";
import '../App.css';

function Img(props){
    return(
        <>
            <img src={props.img_url}/>
        </>
    )
}

export default Img;