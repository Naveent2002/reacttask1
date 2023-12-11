
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {faBell, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";


function Taskfive(){
    return(
        <>
            <div>
                <h1 className="text-center">Notifications</h1>
                <div className="d-flex flex-lg-column flex-sm-column flex-column">
                <button className="text-start bg-info mt-3 text-light mx-auto col-sm-4 col-8 col-lg-6"><FontAwesomeIcon icon={faCircleCheck} className="pe-3"/>Information Message</button>
                <button className="text-start bg-success mt-3 text-light mx-auto col-sm-4 col-8 col-lg-6"><FontAwesomeIcon icon={faCircleCheck} className="pe-3"/>Success Message</button>
                <button className="text-start bg-warning mt-3 text-light mx-auto col-sm-4 col-8 col-lg-6"><FontAwesomeIcon icon={faBell} className="pe-3"/>Warning Message</button>
                <button className="text-start bg-danger mt-3 text-light mx-auto col-sm-4 col-8 col-lg-6"><FontAwesomeIcon icon={faTriangleExclamation} className="pe-3"/>Error Message</button>
                </div>
            </div>
        </>
    );
}
export default Taskfive