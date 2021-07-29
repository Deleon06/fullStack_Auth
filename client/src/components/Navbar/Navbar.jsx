import React from 'react'
import { link } from "react-router-dom"

export default function Navbar() {
  return (
    <div>
      <Link to="/">Todos</Link> 
      {props.user ? (
        <>
          <div>{props.user?.username}</div>
          <Link to="new-todo">Create a new todo</Link>C
          <button>Sign out</button>
        </>
      ) : (
        <div>
          <Link to="/sign-up">Sign Up</Link>
          <Link to="/sign-in">Sign In</Link>
        </div>
      )}
    </div>
  )
}
