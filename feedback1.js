import React from "react";
import'./taskten.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


export function Feedback(){
    return(
        <>
        <div className="backDiv d-flex align-items-center">
            <div className="align-items-center rounded bg-light h-50 p-5 col-lg-5 col-10 mx-auto ">
                <h3 className="text-center">How satisfied are you with our customer support perfomance?</h3>
                <div className="d-flex justify-content-center  gap-5 pt-5">
                <h1 ><Link to='/feedback' className="text-decoration-none"><div className="text-center d-flex flex-md-column flexx-sm-column flex-column flex-lg-column">😥<p className="fs-5 mt-4">Sad</p>
                    </div></Link></h1>
                <h1><Link to='/feedback' className="text-decoration-none"><div className="text-center d-flex flex-md-column flexx-sm-column flex-column flex-lg-column">🙂<p className="fs-5 mt-4">None</p>
                    </div></Link></h1>
                <h1><Link to='/feedback' className="text-decoration-none"><div className="text-center d-flex flex-md-column flexx-sm-column flex-column flex-lg-column">😄<p className="fs-5 mt-4">Happy</p>
                    </div></Link></h1>
                </div>
            </div>
        </div>
        </>
    );

}