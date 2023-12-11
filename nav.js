import React from "react"
import { Link } from "react-router-dom"
 
 function MyNav(){
return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to=''>Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/task1'>Helloworld</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/task2'>Congrats card</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/task3'>Super league</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/task4'>Social Button</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/task5'>Notifications</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/task6'>Member Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/task7'>Learn4.0</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/task9'>Fruit Counter</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/counter'>Counter</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/json'>Productpage</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/task10'>Ratings</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/date'>date</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
);
 }
 export default MyNav