import React from "react";
import './movietrailerstyle.css'
function Movietrailer ({movie,tg,st}){
    return(
     
        <div className={`moviewindow ${st ? "active":undefined}`}>
            <a hef="#" onClick={tg} className="closewindow">
                <ion-icon name="close-outline"></ion-icon>
            </a>
            <iframe width="579" height="240" src={movie.video} title={movie.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

   </div>
       
    );
}

export default Movietrailer;