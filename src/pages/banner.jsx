import React, { useEffect, useState } from "react";
import './bannerstyle.css'
import Movieswiper from "../components/movieswiper";
import Movietrailer from "../components/movietrailer";
function Banner () {
  const [mov,setmov]=useState([]);
  const fetchdata=()=>{
    fetch('http://localhost:3000/data/moviedata.json')
    .then(res=>res.json())
    .then(data=>{setmov(data)})
    .catch(e=>console.log(e.message))
  }

  useEffect(()=>{
     fetchdata();
  },[])
  const handlechange=(id)=>{
    
    const newmov=mov.map((mo)=>{
        mo.active=false;
        if(mo._id===id){
            mo.active=true;
        }
        return mo;
    })
    setmov(newmov)
    
  }
  const [win,setwin]=useState(false);
  const toggle=()=>{
    setwin(!win);
  }
    return (
        <>
        <div className="banner">
            {
                mov && mov.length>0 && mov.map((m)=>{
                    
                    return(
                    <div className="movie">
                    <img src={m.bgImg} alt="" className={`bgImg ${m.active ? 'active1': undefined}`}/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className={`content ${m.active ? 'active2': undefined}`}>
                                    <img src={m.titleImg} className="movie-title"/>
                                    <h4>
                                        <span>{m.year}</span>
                                        <span><i>{m.ageLimit}</i></span>
                                        <span>{m.length}</span>
                                        <span>{m.category}</span>
                                    </h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt culpa veniam tempora quod! Sunt esse eos cum consequatur, inventore voluptatibus veniam harum? Totam, ducimus, eaque iusto, deleniti consequatur pariatur vel iste perspiciatis facere aliquam ratione ipsum architecto expedita nihil! Animi maiores necessitatibus aperiam eligendi quod quis ut, molestiae doloremque!</p>
                                
                                </div>       
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className={`date ${m.active ? 'active3': undefined}`}>
                                    <h2>{m.date}</h2>
                                </div>
                                <div className="trailer">
                                    <a href="#" className="playbtn " onClick={toggle}>
                                        <ion-icon name="play-outline" ></ion-icon>
                                    </a>
                                    <p>Watch Trailer</p>
                                </div>
                                {m.active && <Movietrailer movie={m} st={win} tg={toggle}/>}
                            </div>    
                        </div>
                    </div>
                </div>
                    );
                })
            }

            {mov && mov.length>0 && <Movieswiper slide={mov} slidechange={handlechange} />
}
        </div>
       
        </>
    );
}

export default Banner;