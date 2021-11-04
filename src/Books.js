import React from 'react';

const Books=({book,changeShelf})=>  {
  let hasImage
  if (book.imageLinks) {
      hasImage = book.imageLinks.thumbnail
  } else {
      hasImage = 'https://static.thenounproject.com/png/75231-200.png'
  }

        return (
          
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${hasImage})`}}></div>
                  <div className="book-shelf-changer">
                    <select defaultValue={book.shelf? book.shelf : "none"}onChange={(e)=>changeShelf(book,e.target.value)}>
                      <option value="move" disabled>Move to...</option>
                       <option value="currentlyReading" >Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title"> {book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
          
            
    
     
        )
    }

export default Books;