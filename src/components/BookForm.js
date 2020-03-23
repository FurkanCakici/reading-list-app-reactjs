import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

const BookForm = () => {
   const { dispatch } = useContext(BookContext);
   const [title, setTitle] = useState('');
   const [author, setAuthor] = useState('');

   const handleSubmit = e => {
      e.preventDefault();

      dispatch({
         type: 'ADD_BOOK',
         book: {
            title,
            author
         }
      });
      setTitle('');
      setAuthor('');
   };

   return (
      <form onSubmit={handleSubmit}>
         <div className="input__text">
            <input
               type="text"
               placeholder="book title"
               value={title}
               onChange={e => {
                  setTitle(e.target.value);
               }}
               required
            />

            <input
               type="text"
               placeholder="book author"
               value={author}
               onChange={e => {
                  setAuthor(e.target.value);
               }}
               required
            />
         </div>
         <div className="input__submit">
            <input type="submit" value="Add Book" />
         </div>
      </form>
   );
};

export default BookForm;
