import React from 'react'

const Dashboard = () => {
   
   const box = {
      name: "Dashboard",
      description: "User dashboard page",
      category: "User",
      type: "Page",
      context: "Dashboard",
      icon : "dashboard-icon"
   };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard!</p>
      <div className='border '>{box.name}</div>
      <div className='border'>{box.icon}</div>
      <div>{box.description}</div>
      <div>{box.category}</div>
      <div>{box.type}</div>
      <div>{box.context}</div>
    </div>
  )
}

export default Dashboard;
