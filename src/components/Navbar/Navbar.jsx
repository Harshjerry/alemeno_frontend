import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <h2>Alemeno</h2>
      </div>

      <div className='nav_items'>
        <div> <Link to={`/`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3> Home</h3>
        </Link></div>

        <div>
        <Link to={`/courseList`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3> Courses</h3>  
          </Link>
          </div>
        <div> 
           <h3> About</h3></div>
      </div>

      <div className='dashb'>
        <Link to={`/dashboard/`} style={{ textDecoration: 'none', color: 'inherit' }}> <DashboardIcon style={{ fontSize: "2rem", cursor: "pointer", color: "black" }} />
        </Link> </div>
    </div>
  )
}

export default Navbar