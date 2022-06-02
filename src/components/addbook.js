import React from "react";

export default function Addbook() {
  return (
    <div>
      <form className="Addbook">
        <label>
          Add book
          <input type="text" name="name" />
        </label>
        <input type="submit" />
      </form>
    </div>
  )
}