import React from 'react';
import './Gamers.css';



const BASE_EMBED_URL = 'https://www.youtube.com/embed/';

export function Gamer(props){
    if (!props.id) {
        return null;
      }

const embedUrl = `${BASE_EMBED_URL}${props.id}`;

return(
 <div className="column">
<div className="card">
<h3>{props.name}</h3>
       
       <div className="video-container">
       <iframe  src={embedUrl}>
</iframe>
</div>
</div>
</div>
);
}