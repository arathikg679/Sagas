import React from 'react'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import { Routes, Route } from 'react-router-dom'
import BookList from './BookList'
import Book from './Book';
import "./Style.css"
import Cart from './Cart';
import LatestCollections from './LatestCollections';
import Contact from './Contact';
import Footer from './Footer';
import Codingbooks from './Codingbooks';


function App() {
  return (
   <>
   <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/booklist" element={<BookList />} />
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path="/book/:isbn13" element={<Book />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path='/latestcollections' element={<LatestCollections/>}></Route>
        <Route path='/codingbooks' element={<Codingbooks/>}/>
      </Routes>
      
    <Footer/>
   </>
  )
}
export default App
