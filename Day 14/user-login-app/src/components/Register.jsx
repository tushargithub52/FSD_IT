import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = ({regData}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const data = { name, email, password }

  const handleregister = (e) => {
    e.preventDefault()
    alert('User Registration Successful');
    regData(data);
    console.log(JSON.stringify(data))
  };

  return (
    <form onSubmit={handleregister} >
      <div className="form-group">
        <label for="name">Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter name" value={name} onChange={(e) => {setName(e.target.value)}} />
      </div>
      <div className="form-group">
        <label for="Email">Email address</label>
        <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  )
}

export default Register;