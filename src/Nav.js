import React from 'react'
import "./App.css"
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'
import "./Style.css"
const Nav = () => {
  const items = useSelector((state)=>state.cart)
  return (
  <>
  <nav className="navbar navbar-expand-lg bg-success-subtle  w-100" id="nav">
  <div className="container w-100 ">
    <Link className="navbar-brand " href="/" id="logo">Saga's</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="navbar-items">
        <li className="nav-item" >
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/booklist">Book Store</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
       
       <div className='buttons'>
       <Link to="/cart" className='nav-link fw-bolder text-dark'><i className='fa fa-shopping-cart fs-3' ><span className="position-absolute top-5 p-1 translate-middle  bg-danger border border-light rounded-circle fs-6 text-center">{items.length}</span>
       </i></Link>
       </div>
      </ul>
    </div>
  </div>
</nav>

  </>
   
  )
}

export default Nav
