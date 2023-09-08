import React from 'react'
import validator  from "validator";

export default function Login() {
  let email=validator.isEmail("hardyalsingh@gmai.com");
  console.log(email)
  return (
    <div>
      <h1>this is react login page.</h1>
    </div>
  )
}
