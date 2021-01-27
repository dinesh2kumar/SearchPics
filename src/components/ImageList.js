import './ImageList.css'
import React from 'react';
import ImageCards from "./ImageCards";


const ImageList=(props)=>{
   
  const image =  props.images.map((image)=>{
     return   <ImageCards  key={image.id} image={image}/>
    });


    return<div className="image-list">{image}</div>
  }
export default ImageList;