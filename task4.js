import React from "react";
import './task4.css'

 function Taskfour(){
    
    return(
        <>
        <div className="taskfourbg text-center">
            <h1 className="text-light col-lg-6 text-center mx-auto my-auto pt-5">Social Button</h1>
            <div className="d-flex flex-column align-items-center justify-content-center mx-auto  flex-sm-column flex-lg-row ">
            <button className="likeButton  mt-5 m-2">Like</button> <button className="cmtButton mt-5 m-2" >Comment</button> <button className="shrButton mt-5 m-2 bg-primary" >Share</button>
            </div>
        </div>
        </>
    );
} 
export default Taskfour