import React from "react";
import Book from "./book";
import Addbook from "./addbook";

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
    }
  ]
  return (
    <section>
      <div className="Books-wrapper">
        <ul className="Books">
          {temp.map((book) => (
            <Book ganre={book.ganre} key={book.id} author={book.author} title={book.author}/>
          ))}
        </ul>
      </div>
      <Addbook />
    </section>
  )
}