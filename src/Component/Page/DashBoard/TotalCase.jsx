import React from "react";
import { Link } from "react-router-dom";

function TotalCase() {
  return (
    <div
      className="w-100 border border-dark"
      style={{ padding: "10px 5px", marginTop: "" }}
    >
      <div className="d-flex justify-content-center mb-4">
        <h3>Total Case</h3>
      </div>
      <div className="d-flex justify-content-between">
        <div className="d-flex justify-content-center w-100" style={{borderRight: '6px solid grey'}}>
          <div className="d-flex flex-column align-item-center">
            <Link to='/report'>
              <h5>1299</h5>
            </Link>
            <Link to='/report'>
              <span>Case Complete</span>
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-center w-100">
          <div className="d-flex flex-column align-item-center">
          <Link to='/report'>
              <h5>1299</h5>
            </Link>
            <Link to='/report'>
              <span>Case Complete</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalCase;
