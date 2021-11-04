import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import { useEffect ,useState} from 'react';

import './App.css'
import * as BooksAPI from './BooksAPI';
import Title from './title'
import Shelves from './Shelves'
import Search from './Search'
import TheMainButton from './theMainButton';


const BooksApp = () => {

  const [books, setBooks] = useState([]);
  const [searchedbooks, setSearchedBooks] = useState([]);
  const [input, setInput] = useState("");
   const[error, setError] = useState('');

  useEffect(()=>{
  
    BooksAPI.getAll().then(books=>{
  
  setBooks(books)


    }).catch(error => {
  
    setError(error)
    console.log(error)
    });
  },[])
  

  
    useEffect(()=>{
     
      let checking=true;
      BooksAPI.search(input).then(data=>{
        if(input){

if(data.error){

}else{
if(checking){
  data.forEach(b=>{
    let f =books.filter(B=> B.id === b.id);
    console.log(f);
  
   b.shelf =f[0] ? f.shelf:null;
  
  })
  setSearchedBooks(data)
  setBooks(data)

}

}
        }
       
      })
      return()=>{
        checking=false;
        setSearchedBooks([])
            
      }
      
      },[input])
 const changeShelf=(book,whereto)=>{
  
const update =books.map((b)=>{

  if(b.id===book.id){
    book.shelf=whereto;
    return book;
  }
  return b;
})

setBooks(update);
BooksAPI.update(book,whereto);

 }


 

    return (
      <BrowserRouter> 
      <div className="app">
        <Route path="/search">
      <Search searchedbooks={searchedbooks} input={input} setInput={setInput} changeShelf={changeShelf} books={books} />  
      </Route>
      <Route exact path="/">

        <Title/>
      <Shelves books={books} changeShelf={changeShelf} />
      
          <TheMainButton/>
          </Route>
        </div>
        </BrowserRouter>
     
        )
     
  
  
}

export default BooksApp












