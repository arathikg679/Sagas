import React from 'react'
import "./Style.css"

const About = () => {
  return (
    <div className='mb-5 pb-3 pt-5'>
       <div className='container shadow mb-5'>
      <div className="card  border-0 w-100">
        <div className='row' id="about">
        <div className='col'><img src="https://img.freepik.com/premium-vector/illustration-people-reading-book_108061-390.jpg?w=2000" className="img w-100" alt="about-image" /></div>
        <div className='col '><div className='card-title text-sm-center text-lg-center text-md-center text-xl-center '><h1>About Us</h1></div>
          <div className='card-subtitle text-sm-justify text-lg-justify text-md-justify text-xl-justify ' ><h5 className="text-justify fw-lighter">We offer a tremendous gathering of books in the various classifications of Fiction, Non-fiction, Biographies, History, Religions, Self – Help, and Children. We likewise move in immense accumulation of Investments and Management, Computers, Engineering, Medical, College, and School content references books proposed by various foundations as scheduled the nation over. Besides this, we offer an expansive gathering of E-Books at a reasonable value.</h5>
        </div>
       </div>
       </div>
    </div>
  </div>
 
</div>
   
      
  )
}

export default About
