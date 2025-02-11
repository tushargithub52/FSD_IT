import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css'
import { Link } from 'react-router-dom';

const Dashboard = ({regDash}) => {

  return (
    <div>
      <Link to="/logout" >
        <button>Logout</button>
      </Link>
      <div className="container">
        <div className="row">
          <div className="card">
              <h2>Welcome {regDash.name}</h2>
              <h4>{regDash.email}</h4>
              <h4>{regDash.password}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard