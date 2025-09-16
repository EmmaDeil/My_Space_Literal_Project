import React from 'react'

const Navbar = () => {
   return (
      <div>
         <nav className='bg-light container-fluid' style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.5rem 1rem"}}> 
            <div>
            <img src="/logo.ico" alt="Logo" className='navbar-logo' />
            <span className='navbar-title'>SpaceXplorer</span>
            </div>
            <div className='navbar-links'>
               <img src="/avatar.png" alt="Avatar" className='navbar-icon' />
               </div>
         </nav>
      </div>
   )
}

export default Navbar;
