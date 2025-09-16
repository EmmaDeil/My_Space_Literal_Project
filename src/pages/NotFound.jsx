import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);
  return (
    <div className="container-fluid text-center mt-5 mb-5 py-5">
      <div className="container p-5">
        <h1 className="text-center display-1 mb-4">404</h1>
        <p className="text-center mb-4 text-danger text-xl">
          Oops! Page Not Found
        </p>
        <p className="mb-4">
          The page you are looking for does not exist or has been moved.
        </p>
        <a href="/" className="btn btn-primary mt-3 px-5">
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
