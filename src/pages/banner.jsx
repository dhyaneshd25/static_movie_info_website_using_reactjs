import React, { useEffect, useState } from "react";
import moviesdata from "../data/moviedata";
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
    setmovie(id);
    console.log(id);
  }
  const [win,setwin]=useState(false);
  const [movie,setmovie]=useState(1);
    return (
        <>
        <div className="banner">
            <div className="movie">
                <img src={moviesdata[movie-1].bg_name} alt="" className="bgImg active1"/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="content active2">
                                <img src={moviesdata[movie-1].name_name} className="movie-title"/>
                                <h4>
                                    <span>Year</span>
                                    <span><i>age</i></span>
                                    <span>length</span>
                                    <span>category</span>
                                </h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt culpa veniam tempora quod! Sunt esse eos cum consequatur, inventore voluptatibus veniam harum? Totam, ducimus, eaque iusto, deleniti consequatur pariatur vel iste perspiciatis facere aliquam ratione ipsum architecto expedita nihil! Animi maiores necessitatibus aperiam eligendi quod quis ut, molestiae doloremque!</p>
                                <div className="button">
                                    <a href="#" className="bookbtn" >
                                     <ion-icon name="bookmarks-outline"></ion-icon>Book
                                    </a>
                                    <a href="#" className="mylistbtn">
                                    <ion-icon name="add-outline"></ion-icon>
                                    My List</a>
                                </div>
                            
                            </div>       
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="date active3">
                                <h2>On 15th April</h2>
                            </div>
                            <div className="trailer d-flex align-item-center justify-content-center">
                                <a href="" className="playbtn ">
                                    <ion-icon name="play-outline"></ion-icon>
                                </a>
                                <p>Watch Trailer</p>
                            </div>
                            {<Movietrailer/>}
                        </div>    
                    </div>
                </div>
            </div>
            <Movieswiper slide={moviesdata} slidechange={handlechange} />
          
        </div>
       
        </>
    );
}

export default Banner;