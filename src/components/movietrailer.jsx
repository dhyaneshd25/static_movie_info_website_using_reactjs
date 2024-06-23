import React from "react";
import './movietrailerstyle.css'
function Movietrailer (){
    return(
        <div className="moviewindow">
            <a hef="">
                <ion-icon name="close-outline"></ion-icon>
            </a>
            <iframe
            width="1200"
            height="720"
            src=""
            title={""}
            frameBorder="0"
            allow="acceleration;clipboard-write;encryted-media;gyroscope;picture-in-picture;web-share"
            allowFullScreen
            ></iframe>
        </div>
    );
}

export default Movietrailer;