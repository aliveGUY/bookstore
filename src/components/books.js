import React from 'react';
import Book from './book';
import Addbook from './addbook';

export default function Books() {
  const temp = [
    {
      id: 1,
      ganre: 'Action',
      title: 'Title 1',
      author: 'Ben Bob',
    },
    {
      id: 2,
      ganre: 'Economy',
      title: 'Title 2',
      author: 'Steve Jobs',
    },
  ];
  return (
    <section>
      <div className="Books-wrapper">
        <ul className="Books">
          {temp.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </ul>
      </div>
      <Addbook />
    </section>
  );
}
