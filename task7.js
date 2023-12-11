import React from "react";
import './task7.css'

function Taskseven(){
    return(
        <div className="parent-div">
        <div className="text-center">
         <h1>Learn 4.0 Technologies</h1>
         <p>Get trained by alumni of IIT's top companies like Amazon, Microsoft, Intel, Qualcomm, etc. Learn directly from professionals involved in Product Development</p>
            </div>
            <div class="row row-cols-1 row-cols-md-2 g-4 container-fluid">
                <div class="col-lg-5 mx-auto">
                    <div class="card child">
                        <div class="card-body  bdr-1">
                                <h5 class="card-title">Data Scientist</h5>
                            <p class="card-text">Data Scientists gather, analyze, work and monitor large sets of unstructured data.</p>
                            <div className="text-end"><img className="img" src="https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg"></img>
                            </div>
                            </div>
                    </div>
                </div>
                <div class="col-lg-5 mx-auto">
                    <div class="card child">
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body bdr-2">
                                <h5 class="card-title">IOT Developer</h5>
                            <p class="card-text">IoT developers are professionals who can develop, manage and monitor IoT devices.</p>
                            <div className="text-end">
                            <img className="img" src="https://cdn1.vectorstock.com/i/1000x1000/94/25/cute-cartoon-house-vector-2139425.jpg"></img>
                            </div>
                            </div>
                    </div>
                </div>
                <div class="col-lg-5 mx-auto">
                    <div class="card child">
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div class="card-body  bdr-3">
                                <h5 class="card-title">VR Developer</h5>
                            <p class="card-text">A VR developer creates completely new digital environments that people can see.</p>
                            <div className="text-end">
                            <img className="img" src="https://cdn-icons-png.flaticon.com/512/5272/5272372.png"></img>
                            </div>
                            </div>
                    </div>
                </div>
                <div class="col-lg-5 mx-auto">
                    <div class="card child">
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                            <div class="card-body  bdr-4">
                                <h5 class="card-title">ML Engineer</h5>
                            <p class="card-text">Machine learning engineers feed datainto models defined by data scientists.</p>
                            <div className="text-end">
                            <img className="img" src="https://thumbs.dreamstime.com/z/blue-memory-card-mascot-costume-cute-vector-cartoon-character-holding-mechanical-tool-memory-card-mascot-costume-holding-228480561.jpg"></img>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Taskseven