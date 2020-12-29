import React from "react";
import SellerNav from "../../components/nav/SellerNav";

const SellerDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <SellerNav />
        </div>

        <div className="col">
          <h4>SellerDashboard</h4>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
