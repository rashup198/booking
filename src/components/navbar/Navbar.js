import React from 'react';
import "./navbar.css"
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const {user,isAuthenticated} = useAuth0();

  return (
    <div className='navbar'>
    <div className='navContainer'>
      <Link to='/' className='navLogo'>
      <span className='logo'>
            PandeyBooking
        </span>
      </Link>
    
        
        <div className='navItems'>

       { isAuthenticated && <div className='user'>
          <img className='user_img' src={user.picture} alt={user.name} />
          <p className='user_detail'>{user.name}</p>
        </div>
       }
       
       
       <div>
        {
          
          isAuthenticated ?<button className='btnLogin' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button> :
          <button className='btnLogin' onClick={() => loginWithRedirect()}>Log In</button>
          }
          </div>

        </div>
    </div>
      
    </div>
  )
}

export default Navbar
