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
            <img src="/Bgimages/images1.webp" className="img w-100 shadow-lg" alt="home-image"  />
          </div>
        </div>
      </div>
      
     

      <div className='container pt-5 mb-5'>
        <div className='display-6 text-center  pb-3' id="bst-head">Best Sellers</div>
        <div className='row g-5' id="best-sellers">
          <div className='col'>
            <div className='card  w-100 shadow-lg'><img src="./Bgimages/hbook1.png" ></img></div>
            <div id="bestsel-text">
            <div ><h3>Aasha and the spirit bird</h3></div>
            <div className='lead'><p>$45</p></div>
            </div>
          </div>

          <div className='col'>
            <div className='card  w-100 shadow-lg'><img src="./Bgimages/hbook2.png" ></img></div>
            <div id="bestsel-text">
            <div ><h3>Okka bokka</h3></div>
            <div className='lead '><p>$100</p></div>
            </div>
           
          </div>

          <div className='col'>
            <div className='card  w-100 shadow-lg'><img src="./Bgimages/hbook3.webp" ></img></div>
            <div id="bestsel-text">
            <div ><h3>An old mother alone in the wilderness</h3></div>
            <div className='lead'><p>$50</p></div>
            </div>
           
          </div>

          <div className='col'>
            <div className='card  w-100 shadow-lg'><img src="./Bgimages/hbook4.jpg" ></img></div>
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
