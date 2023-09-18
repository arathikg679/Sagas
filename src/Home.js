import React from 'react'
import About from './About'
import Codingbooks from './Codingbooks';
import "./Style.css"



const Home = () => {
  return (
    <div className='container pt-5 mb-5'  >
      <div className="card w-100 border-0 shadow-lg">
        <div className="row">
          <div className='col w-100' >
            <div className="card-body g-3 text-center">
              <h5 className="card-title w-100 h-100  fw-bolder  mt-5 text-dark " id="title">Welcome</h5>
              <p className="card-text w-100 h-100  fw-bold   text-dark" id="tag-line">Enjoy the new world inside saga's</p>
            </div>
          </div>
          <div className="col w-100  text-center" id="home-bg">
            <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-book-club-illustration_23-2149334858.jpg.webp" className="img w-100 shadow-lg" alt="home-image"  />
          </div>
        </div>
      </div>
      
     

      <div className='container pt-5 mb-5'>
        <div className='display-6 text-center  pb-3' id="bst-head">Best Sellers</div>
        <div className='row g-5' id="best-sellers">
          <div className='col'>
            <div className='card  w-100 shadow-lg'><img src="https://mir-s3-cdn-cf.behance.net/projects/404/a3f3cd85314781.Y3JvcCw4NTQsNjY4LDU0OSww.jpg" ></img></div>
            <div id="bestsel-text">
            <div ><h3>Aasha and the spirit bird</h3></div>
            <div className='lead'><p>$45</p></div>
            </div>
          </div>

          <div className='col'>
            <div className='card  w-100 shadow-lg'><img src="https://m.media-amazon.com/images/I/91f4Z+hyxiL._AC_UF1000,1000_QL80_.jpg" ></img></div>
            <div id="bestsel-text">
            <div ><h3>Okka bokka</h3></div>
            <div className='lead '><p>$100</p></div>
            </div>
           
          </div>

          <div className='col'>
            <div className='card  w-100 shadow-lg'><img src="https://marketplace.canva.com/EAFMK67_WZk/1/0/1003w/canva-brown-and-cream-illustration-novel-book-cover-v3YbqY4UuWc.jpg" ></img></div>
            <div id="bestsel-text">
            <div ><h3>An old mother alone in the wilderness</h3></div>
            <div className='lead'><p>$50</p></div>
            </div>
           
          </div>

          <div className='col'>
            <div className='card  w-100 shadow-lg'><img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/summer-themed-children%27s-book-cover-design-template-8a6ac74063d879df4e8774dc960399b2_screen.jpg?ts=1637012075" ></img></div>
            <div id="bestsel-text">
            <div ><h3>The heroes of summer</h3></div>
            <div className='lead'><p>$80</p></div>
            </div>
            
          </div>
        </div>
      </div>

      <About/>
      <Codingbooks/>
          
    </div>
  )
}

export default Home
