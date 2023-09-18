import axios from 'axios'
import React, {useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux'
import {add} from "./cartSlice"
import "./Style.css"


const BookList = () => {
  const [boook,setBoook]=useState([])
  const dispatch =useDispatch();

  useEffect(()=>{
      fetchBooks();
  },[])
  const fetchBooks=async()=>{
      const r =await axios.get("https://api.itbook.store/1.0/new")
      .then(r=>setBoook(r.data.books));
  }

  const addbooks =(bk)=>{
    dispatch(add(bk));
   }

  return (
    <div className="container mb-5 pb-3">
    <div className="row " id="bookstore">
    {boook.map((bk)=>(
        <>
        <div className='col-xs-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 mb-4 g-5 ' key={bk.isbn13}>
        <Link to={`/book/${bk.isbn13}`}>
        <div className="text-center shadow-lg" >
          <img src={bk.image} className="img w-100" alt={bk.title}  />
        </div>
        </Link>
          <div className="text-center">
            <h5 className=" mb-0">{bk.title.substring(0,13)}...</h5>
            <p className="">{bk.price}</p>
            <button className='btn btn-outline-dark ' onClick={()=>addbooks(bk)}>Add to cart</button>
          </div>
      </div>
       
        </>
    ))}
    </div>
    </div>
  )
}

export default BookList
