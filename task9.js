import React from "react";
import './task9.css'
import { useState } from "react";


 export function TaskNine(){
    const [countMango,setCountMango]=useState(0)
    const [countBanana,setCountBanana]=useState(0)

        return(
            <>
            <div className="mainDiv1 text-center d-flex justify-content-center align-items-center ">
                <div className=" bg-light col-11 rounded pt-5 h-75 col-md-8 ">
                    <h1>Bob ate <span >{countMango}</span> mangoes and <span>{countBanana}</span> bananas</h1>
                    <div className="d-flex gap-5 flex-lg-row flex-column justify-content-center text-center pt-3">
                        <div className="d-flex flex-lg-column mx-auto flex-column col-6 col-lg-4">
                            <img className="h-75 w-100 col-12"  src="https://cdn3d.iconscout.com/3d/premium/thumb/mango-6200498-5050715.png"></img>
                            <button onClick={()=>setCountMango(countMango+1)} className=" button mt-4 bg-primary text-light rounded col-lg-4 mx-auto">Eat Mango</button>
                        </div>
                        <div className="d-flex flex-lg-column mx-auto flex-column col-5 col-lg-4">
                            <img className="w-100 h-75 col-10" src="https://img.freepik.com/premium-photo/3d-opened-banana-illustration-white-background_152558-85253.jpg"></img>
                            <button onClick={()=>setCountBanana(countBanana+1)} className="button mt-4 col-lg-4 bg-primary rounded text-light mx-auto">Eat Banana</button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );

 }