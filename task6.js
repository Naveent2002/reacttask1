import React from "react";
import "./task6.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
function TaskSix(){
    return(
        <div className="backgroundDiv d-flex align-items-center justify-content-center">
            <div className="secondBg bg-light col-lg-7 d-flex flex-column flex-lg-row align-item-center justify-content-center">
                <div className="col-lg-5 d-flex col-lg-5 col-sm-4 align-items-center justify-content-center ">
                <img className="h-50 w-75 col-lg-10" src="https://www.pngitem.com/pimgs/m/298-2989348_laptop-circle-icon-png-transparent-png.png "/>
                </div>
            <div className="d-flex flex-column col-lg-7 col-sm-4 gap-4 align-item-center justify-content-center">
               <h4 className="mx-auto">Member Login</h4>
               {/* <span className="input-group-text">
                <FontAwesomeIcon icon={faEnvelope}/>
              </span> */}
               <input placeholder="Email" className="col-lg-6 rounded mx-auto" type="text"></input>
               <input placeholder="Password" className="col-lg-6 rounded mx-auto" type="password"></input>
               <button className="col-lg-6 rounded mx-auto bg-success text-light">LOGIN</button>
               <p className="mx-auto">Forgot <a className="text-success text-decoration-none" href="">username/password</a></p>
               <a  className="mx-auto text-success text-decoration-none " href="">Create your account</a>
               </div>
            </div>
         </div>
    );
}
export default TaskSix