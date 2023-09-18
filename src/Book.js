import React from 'react'
import { useState,useEffect} from 'react';
import axios from 'axios';
import { Link,useParams} from 'react-router-dom';

const Book = () =>{
    
    const {isbn13}=useParams()
    const[btitle,setBtitle]=useState("");
    const [subtitle,setSubtitle]=useState("");
    const [price,setPrice]=useState("");
    const [cover,setCover]=useState("");
    const [des,setDes]=useState("")

    useEffect(()=>{
        const fetchBooks=async()=>{
        const r =await axios.get(`https://api.itbook.store/1.0/books/${isbn13}`)
        setCover(r.data.image)
        setBtitle(r.data.title)
        setSubtitle(r.data.subtitle)
        setDes(r.data.description)
        setPrice(r.data.price)
    }
        fetchBooks();
    }) 
   

    const ShowBook=()=>{
        return(
            <div className='mb-3 pb-2'>
            <div className='row shadow-lg'>
            <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 pt-5 g-3 text-center '><img src={cover} alt={btitle} className='img w-100' height={600}></img></div>
            <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 pt-5 g-3 '> <h4 className='text-uppercase text-black-50 w-100 pt-5'>{subtitle}</h4>
             <h1 className='display-5'>{btitle}</h1>
             <h3 className='display-6 fw-bold my-4'>{price}</h3>
             <p className='lead w-100'>{subtitle}</p>
             <p className='text-dark'>{des}</p>
             </div>
            </div>
            </div>
        )
    }

  return (
    <div className='pt-4 mt-4 pb-5 mb-4'>
      <div className='container ' >
        <div className='row'>
            {<ShowBook/>}
        </div>
      </div>
    </div>
  )
}

export default Book
