import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const Navbar = () => {
   const { books } = useContext(BookContext);
   return (
      <div className="navbar">
         <h1>Reading List</h1>
         <p>Şu anda {books.length} kitaba sahipsiniz</p>
      </div>
   );
};

export default Navbar;
