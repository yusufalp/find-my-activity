import React from 'react';
import './Success.css'

export default function Success(){
  return(
    <div>
      <h2 className="success">Successful</h2>
      <p>Your submission is accepted</p>
      <img className="group-kids" src="/images/success-children.png" alt="children with a heart"></img>
    </div>
  )
}