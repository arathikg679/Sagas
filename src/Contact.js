import React from 'react'
import { FaEnvelope, FaGlobe, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import "./Style.css"


const Contact = () => {
  return (
    <div className='mb-5 pb-4 pt-5'>
      <div className='container mb-5'>
        <div className='card border-0 shadow-lg'>
          <h1 className=' text-center fw-bolder pt-5' id="contact-head">Contact Us</h1>
          <div className='row mt-4' id="contact">
            <div className='col text-center'><img src="/Bgimages/contactus.jpg" className='w-100 h-100' /></div>

            <div className='col text-center'>
              <div className='text-center fs-3 '>
                <div className=' mt-5' > <FaPhoneAlt size={50} /></div>
                <div className='mt-3' ><p>+91 34232 3435445</p></div>
              </div>
              <div className='text-center fs-3 '>
                <div className=' mt-5'> <FaEnvelope size={50} /></div>
                <div className='mt-2'><p>sagas@gmail.com</p></div>
              </div>
              <div className='text-center fs-3 '>
                <div className=' mt-5'> <FaGlobe size={50} /></div>
                <div className='mt-2'><p>www.sagas.com</p></div>
              </div>
              <div className='text-center fs-3 '>
                <div className=' mt-5'> <FaMapMarkerAlt size={50} /></div>
                <div className='mt-2'><p>Saga's Books<br></br>6543 N 9th Street<br></br>APO, AA 33608-1234</p></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact