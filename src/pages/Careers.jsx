
import React from 'react';
import '../css/Careers.css';
import NoNavbar from '../components/Navbar/NoNavbar';
import NoFooter from '../components/Footer/NoFooter';


const Careers = () => {
  return (
    <>
      <NoNavbar />
      <div>
        <div className="container-fluid careers-section">
          <h1>Join Our Team</h1>
          <p>We are looking for talented individuals to join our team and help us build the future of space exploration.</p>
          <div>
            <button className="btn btn-primary">View Open Positions</button>
            <button className="btn btn-outline">Contact Our Team</button>
          </div>
        </div>
      </div>
      <NoFooter />
    </>
  );
}

export default Careers;
