import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
   const { books } = useContext(BookContext);
   return books.length ? (
      <div className="book-list">
         <ul>
            {books.map(book => {
               return <BookDetails book={book} key={book.id} />;
            })}
         </ul>
      </div>
   ) : (
      <h1 className="empty">NO BOOK</h1>
   );
};

export default BookList;
