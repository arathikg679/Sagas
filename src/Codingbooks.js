import React from 'react'
import { Link } from 'react-router-dom'
import "./Style.css"

const Codingbooks = () => {
    return (
        <div className=' pb-3' id="coding-books" >
            <div className='container bg-light' >
                <div className='row shadow-lg ' >
                    <div className='col'>
                        <div className='text-center pt-5'><h2>Best Coding Books For Beginners</h2></div>
                    </div>
                    <div className='col text-center p-5 bg-info-subtle' id="coding-link">
                        <Link to="/latestcollections" className='btn btn-outline-success-subtle fs-2 text-secondary'>See <br></br>our <br></br> latest <br></br>book collections</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Codingbooks
