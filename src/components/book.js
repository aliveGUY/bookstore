import React from "react";

export default function Book(book) {
  return (
    <li key={book.id} className="Book">
      <h4>{book.ganre}</h4>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <ul className="Book-nav">
        <li className="Book-nav-item">
          <button type="button">Comments</button>
        </li>
        <li className="Book-nav-item middle">
          <button type="button">Remove</button>
        </li>
        <li className="Book-nav-item">
          <button type="button">Edit</button>
        </li>
      </ul>
    </li>
  )
}