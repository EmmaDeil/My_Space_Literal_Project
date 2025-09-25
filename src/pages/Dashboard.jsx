import React from "react";
import AuthForm from "../forms/AuthForm";

// Grid component that accepts props and generates different divs based on ID
const DynamicGrid = ({ items = [] }) => {
  const renderGridItem = (item) => {
    switch (item.id) {
      case "stats":
        return (
          <div className="col-6 col-sm-3" key={item.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{item.title || "Statistics"}</h5>
                <p className="card-text">{item.content || "User statistics"}</p>
                <div className="text-primary fs-2">{item.value || "0"}</div>
              </div>
            </div>
          </div>
        );
      case "activity":
        return (
          <div className="col-6 col-sm-3" key={item.id}>
            <div className="card h-100 bg-light">
              <div className="card-body">
                <h5 className="card-title">{item.title || "Activity"}</h5>
                <ul className="list-unstyled">
                  {item.activities?.map((activity, index) => (
                    <li key={index} className="small">
                      {activity}
                    </li>
                  )) || <li className="small">No recent activity</li>}
                </ul>
              </div>
            </div>
          </div>
        );
      case "progress":
        return (
          <div className="col-6 col-sm-3" key={item.id}>
            <div className="card h-100 bg-success text-white">
              <div className="card-body">
                <h5 className="card-title">{item.title || "Progress"}</h5>
                <div className="progress mb-2">
                  <div
                    className="progress-bar bg-light"
                    role="progressbar"
                    style={{ width: `${item.percentage || 0}%` }}
                  ></div>
                </div>
                <small>{item.percentage || 0}% Complete</small>
              </div>
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="col-6 col-sm-3" key={item.id}>
            <div className="card h-100 border-warning">
              <div className="card-body">
                <h5 className="card-title">{item.title || "Settings"}</h5>
                <p className="card-text">
                  {item.content || "Manage your settings"}
                </p>
                <button className="btn btn-sm btn-outline-warning">
                  {item.buttonText || "Configure"}
                </button>
              </div>
            </div>
          </div>
        );
      case "custom":
         return (
            <div className="col-6 col-sm-3" key={item.id || Math.random()}>
               <div className="card h-100">
                  <div className="card-body">
                     <h5 className="card-title">{item.title || "Default"}</h5>
                     <p className="card-text">{item.content || "Default content"}</p>
                     <button className="btn btn-sm btn-primary">
                        {item.buttonText || "Action"}
                     </button>
                  </div>
               </div>
            </div>
         );
      default:
        return (
          <div className="col-6 col-sm-3" key={item.id || Math.random()}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{item.title || "Default"}</h5>
                <p className="card-text">{item.content || "Default content"}</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="container text-center">
      <div className="row g-3">
        {items.map(renderGridItem)}
        {/* Add line break after every 2 items on small screens */}
        {items.length > 2 && <div className="w-100 d-sm-none"></div>}
      </div>
    </div>
  );
};

const Dashboard = () => {
//   const box = {
//     name: ["Dashboard", "User Panel", "Control Center"],
//     description: "User dashboard page",
//     category: "User",
//     type: "Page",
//     context: "Dashboard",
//     icon: "dashboard-icon",
//   };

  // Sample data with different IDs to generate different div types
  const gridItems = [
    {
      id: "stats",
      title: "Total Users",
      content: "Active users in the system",
      value: "1,234",
    },
    {
      id: "activity",
      title: "Recent Activity",
      activities: ["User login", "Data updated", "Settings changed"],
    },
    {
      id: "progress",
      title: "Project Progress",
      percentage: 25,
    },
    {
      id: "settings",
      title: "System Settings",
      content: "Configure your dashboard",
      buttonText: "Manage",
    },
    {
      id: "custom",
      title: "Custom Card",
      content: "Any content",
      buttonText: "Action",
    }
  ];

  return (
   //  <div
   //    className="d-flex flex-row-column gap-3 align-items-start"
   //    style={{ padding: "2rem" }}
   //  >
   //    <div
   //      className="border"
   //      style={{
   //        padding: "1rem",
   //        borderRadius: "0.5rem",
   //        width: "10rem",
   //        height: "10rem",
   //      }}
   //    >
   //      {box.name[1]}
   //      <p style={{ fontSize: "0.8rem", color: "gray" }}>{box.description}</p>
   //      <p style={{ fontSize: "0.8rem", color: "gray" }}>{box.category}</p>
   //      <p style={{ fontSize: "0.8rem", color: "gray" }}>{box.type}</p>
   //    </div>
   //    {/* <AuthForm /> */}
   //  </div>
   //  <div>
      <div style={{ padding: "2rem" }}>
       <DynamicGrid items={gridItems} />
    </div>
  );
};

export default Dashboard;
