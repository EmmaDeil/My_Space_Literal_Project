import React from 'react'
import AuthForm from '../forms/AuthForm';

const Dashboard = () => {
   
   const box = {
      name: ["Dashboard", "User Panel", "Control Center"],
      description: "User dashboard page",
      category: "User",
      type: "Page",
      context: "Dashboard",
      icon : "dashboard-icon"
   };
    

  return (
    <div className='d-flex flex-row-column gap-3 align-items-start' style={{padding: "2rem"}}>
      <div className='border' style={{ padding: "1rem", borderRadius: "0.5rem", width: "10rem", height: "10rem" }}>{box.name[1]}
         <p style={{fontSize: "0.8rem", color: "gray"}}>{box.description}</p>
         <p style={{fontSize: "0.8rem", color: "gray"}}>{box.category}</p>
         <p style={{fontSize: "0.8rem", color: "gray"}}>{box.type}</p>
      </div>
      
      {/* <AuthForm /> */}
    </div>
  )
}

export default Dashboard;
