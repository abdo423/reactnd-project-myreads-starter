import React from 'react'
import { Link } from 'react-router-dom';
const TheMainButton=()=>{
    return (
        <div className="open-search">
             <Link to='/search'><button> Add a book</button></Link>
            </div>
    )
}
export default TheMainButton;