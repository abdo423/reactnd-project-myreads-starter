import React from 'react';
import Books from './Books'
const Shelf =({books,title,changeShelf}) =>{
   

        return (
         
             <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => (
                        <li key={book.id}>
                            <Books book={book} changeShelf={changeShelf}  />
                        </li>
                    ))}

                </ol>
            </div>
        </div>
          
        )
    }

export default Shelf;