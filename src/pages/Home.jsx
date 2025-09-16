import React from "react";

const Home = () => {
  return (
    <div>
      <div className="search-bar d-flex justify-content-center my-3 gap-2" style={{margin: "0 auto"}}>
        <input type="search" name="search" id="search" placeholder=" Search..." style={{width: "35rem", height: "2.0rem"}}/>
        <button className="btn btn-primary" onClick={() => {}} style={{height: "2.1rem", padding: "0 1rem"}}>Search</button>
      </div>
    </div>
  );
};

export default Home;
