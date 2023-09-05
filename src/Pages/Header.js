import React from 'react';
import {Link} from "react-router-dom";

function Header() {
  return (
    <div>
            <ul className='main-nav'>
            <li><Link to="/">CREATE</Link></li>
            <li><Link to="/read">READ</Link></li>
            <li><Link to="/update">UPDATE</Link></li>
         </ul>
    </div>
  )
}

export default Header