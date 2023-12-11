import React from "react";
import "./task10.css";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";


export function Productpage(){
    const[product,setProduct]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProduct(data))
    })

    return(
        <>
        <div className="text-center row ">
        <h1>Product List</h1>
        {
            product.map((value,index)=>(
                <>
                <div className="row col-lg-4">
                <div className="card">
                <img className="card-img-top h-50" src={value.image} alt="Card image cap"/>
                <div className="card-body">
                <h5 className="card-title">{value.title}</h5>
                <p className="card-text">{value.description}</p>
                <Link to={`/details/${value.id}`} className="btn btn-primary">view</Link>
  </div>
</div>
</div>
</>
            )
            )
        }


        </div>
        </>
    );
}