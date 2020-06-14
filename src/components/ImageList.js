import React from 'react';
import './ImageList.css';

const ImageList= (props) => {
    
    console.log(props.images);

    const pics=props.images.map((cur)=>{
        return <img alt={cur.alt_description} key={cur.id} src={cur.urls.regular}/>;   //return an element with complete <img,src>
    });

    return <div className="image-list">{pics}</div>;
}

export default ImageList;