import React from 'react'

const Navbar = () => {
   return (
      <div>
         <nav className='bg-light container-fluid' style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.5rem 1rem"}}> 
            <div>
            <img src="/logo.ico" alt="Logo" className='navbar-logo' />
            <span className='navbar-title'>SpaceXplorer</span>
            </div>
            <div className='navbar-item dropdown' style={{display: "flex", alignItems: "center", gap: "0.5rem"}}>
               <img src="/avatar.png" alt="Avatar" className='avatar' />
               <a href="#" className='navbar-link dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false"></a>
               <ul className='dropdown-menu dropdown-menu-end'>
                  <li><a href="#" className='dropdown-item'>Profile</a></li>
                  <li><a href="#" className='dropdown-item'>Settings</a></li>
                  <li><hr className='dropdown-divider'/></li>
                  <li><a href="#" className='dropdown-item'>Logout</a></li>
               </ul>
               </div>
         </nav>
         
      </div>
   )
}

export default Navbar;
