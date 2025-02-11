import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainLayout.css'
import {useNavigate} from 'react-router-dom';

const Login = ({regLogin}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email == regLogin.email && password == regLogin.password ) {
      alert('Login successful')
      navigate('/dashboard')
    } else {
      alert('Invalid Credentials')
    }
  };

  return (
    <div>
      <form className="form-control" >
      <div className="form-group">
        <label for="Email">Email address</label>
        <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleLogin}>Login</button>
    </form>
    </div>
  )
}

export default Login