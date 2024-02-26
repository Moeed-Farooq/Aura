import React from "react";

const PaymentMethod = () => {
  return (
    <>
      <div className="row  p-3" style={{ height: "100%" }}>
        <div className="paymentMethod">
          <p>Payment Method</p>
          <div className="row">
            <div className="col-md-4 paymentData">
              <p>Transaction Type</p>
              <p>Paypal</p>
            </div>
            <div className="col-md-4 paymentData">
              <p>Credit id</p>
              <p>1234567890</p>
            </div>
            <div className="col-md-4 paymentData">
              <p>Account Type</p>
              <p>Influincer</p>
            </div>
          </div>
          <p>Recipent</p>
          <div className="row">
            <div className="col-md-4 paymentData">
              <p>Full Name</p>
              <p>Hazel Finch</p>
            </div>
            <div className="col-md-4 paymentData">
              <p>Account Number</p>
              <p>1234567890</p>
            </div>
            <div className="col-md-4 paymentData">
              <p>Amount</p>
              <p>$ 400</p>
            </div>
          </div>
          <p>Log</p>
          <div className="row">
            <div className="col-md-4 paymentData">
              <p>Requested</p>
              <p>12 Jan,2024 02:00 am</p>
            </div>
            <div className="col-md-4 paymentData">
              <p>Transfer sent</p>
              <p>12 Jan,2024 02:00 am</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethod;
