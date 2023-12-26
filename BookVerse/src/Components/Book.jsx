import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link } from "react-router-dom";


const Books = (props) => {

    const [book,Setbook]=useState([])

    useEffect(()=>{
    axios.post(
      'https://reactnd-books-api.udacity.com/search',
      { query: props.search ? props.search : 'c', maxResults: 10 },
      { headers: { Authorization: 'whatever-you-want' } }
    )
    .then((res) => {Setbook(res.data.books),console.log(res.data.books)})
    .catch((err) => console.log(err)
    )},[props.search])
  
    return (
        <>
        <nav id='main-navbar'>

        <div>
            <h2 style={{color:'red',fontSize:'xx-large',marginLeft:'30px'}}>Kalvium Books</h2>
        </div>

        <div id='custom-search'>

            <input id='search-input' type='text' placeholder='Search Here...'onChange={(e)=>props.handleSearch(e)} />   
        
        </div>

        <div style={{width:'12vw'}}>

            <Link to="/register"><button id='register-btn'>Register</button></Link>

        </div>

        </nav>




      <div id='books-collection' className='flex-container'>


        {Array.isArray(book) ?  book.filter((book)=>{
            if(props.search==''){
                return book
            }else if(book.title.toLocaleLowerCase().includes(props.search.toLocaleLowerCase())){
                return book
            }
        })

        .map(book=>(
            <div key={book.id} id='card' className='book-card'>
              
              {book.imageLinks && book.imageLinks.thumbnail ? (
                    <img src={book.imageLinks.thumbnail} alt={book.title} />
                  ) : (
                   null
                  )}
              <div>{book.title}</div>
              <div>{book.averageRating ? book.averageRating : "3.8"}<span>⭐</span></div>
              <div><h4>Free</h4></div>
            
            </div>
          ))
        
        : <h1>Books not available</h1>}
      </div>
      </>
    )


}

export default Books