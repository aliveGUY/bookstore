import React from 'react';

export default function Addbook() {
  return (
    <div>
      <form className="Addbook">
        <label htmlFor="addbook">
          Add book
          <input type="text" name="name" id="addbook" />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
