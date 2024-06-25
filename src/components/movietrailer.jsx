import React from "react";
import './movietrailerstyle.css'
function Movietrailer ({movie,tg,st}){
    return(
        <div className={`moviewindow ${st ? "active":undefined}`}>
            <a hef="" onClick={tg}>
                <ion-icon name="close-outline"></ion-icon>
            </a>
            <iframe
            width="1200"
            height="720"
            src={movie.vlink}
            title={""}
            frameBorder="0"
            allow="acceleration;clipboard-write;encryted-media;gyroscope;picture-in-picture;web-share"
            allowFullScreen
            ></iframe>
        </div>
    );
}

export default Movietrailer;