import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {add} from "./cartSlice"
import "./Style.css"


const LatestCollections = () => {
    const [latest,setLatest]=useState([])
    const dispatch =useDispatch();
    useEffect(()=>{
        const getLatest=async()=>{
            const url=await axios.get("https://api.itbook.store/1.0/search/mongodb")
            setLatest(url.data.books)
        }
        getLatest()
      })

      const addbooks =(book)=>{
        dispatch(add(book));
       }
    
  return (
    <div className='mb-5 pb-4'>
         <div className="container mb-5">
         <div className='col-12 mb-5'>
            <h1 className='display-5 fw-bolder text-center' id="latest-head">Latest Collection</h1>
            <hr></hr>
          </div>
    <div className="row ">
    {latest.map((book)=>(
        <>
        <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-5' key={book.isbn13} id="latest-book">
        <Link to={`/book/${book.isbn13}`}>
        <div className="text-center shadow" >
          <img src={book.image} className="img-fluid w-100" alt={book.title}/>
        </div>
        </Link>
          <div className="text-center "  id="latest-details">
            <div >{book.title.substring(0,15)}...</div>
            <div  className='lead mb-2'>${book.price}</div>  
            <button className='btn btn-outline-dark' onClick={()=>addbooks(book)}>Add to cart</button>
          </div>
      </div>
       
        </>
    ))}
    </div>
    </div>
    </div>
  )
}
export default LatestCollections