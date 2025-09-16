import React from "react";

const Home = () => {
  return (
    <div>
      <div className="search-bar d-flex justify-content-center my-3 gap-2" style={{margin: "0 auto"}}>
        <input type="search" name="search" id="search" placeholder=" Search..." style={{width: "35rem", height: "2.0rem"}}/>
        <button className="btn btn-primary" onClick={() => {}} style={{height: "2.1rem", padding: "0 1rem"}}>Search</button>
      </div>
      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4">
            <button>Button 1</button>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <button>Button 2</button>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <button>Button 3</button>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <button>Button 4</button>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <button>Button 5</button>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <button>Button 6</button>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <button>Button 7</button>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <button>Button 8</button>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <button>Button 9</button>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <button>Button 10</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
