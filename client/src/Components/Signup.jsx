import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
function Signup(){
    const[name,setName] = useState();
    const[email,setEmail] = useState();
    const[password,setPassword] = useState();

    const handleSubmit = (e) =>{
      e.preventDefault();
      axios.post('http://localhost:3000/signup',{name,email,password})
      .then(res => console.log(res))
      .catch(err => console.log(`Error happen when creatinf Account ${err}`))
    }

    return(
        <div className="flex justify-center item-center bg-slate-200 h-100">
          <div className="bg-white p-3 rounded w-25">

            <h2>Register</h2>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label htmlFor="name">
                  <strong>Name</strong>
                </label>
                <input 
                  type="text"
                  placeholder="Enter name"
                  autoComplete="off"
                  name="name"
                  className="mx-5 rounded-0"
                  onChange={(e) => setName(e.target.value)}
                  />
              </div>
              <div className="mb-3">
                <label htmlFor="email">
                  <strong>Email</strong>
                </label>
                <input 
                  type="email"
                  placeholder="Enter Email"
                  autoComplete="off"
                  name="email"
                  className="mx-5 rounded-0"
                  onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
              <div className="mb-3">
                <label htmlFor="password">
                  <strong>Password</strong>
                </label>
                <input 
                  type="text"
                  placeholder="Enter Password"
                  autoComplete="off"
                  name="password"
                  className="mx-5 rounded-0"
                  onChange={(e) => setPassword(e.target.value)}
                  />
              </div>
              

              <button type="submit" className="border bg-green-400 px-4 py-1 w-full">Register</button>
              </form>
              <p>Already Have An Account</p>

              <Link to='/login' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</Link>

           

          </div>

        </div>
    )
}

export default Signup;