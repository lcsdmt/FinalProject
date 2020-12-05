import React from "react";

function spinner() {
  return (
    <div className="card shadow">
      <div className="card-body" style={{ textAlign: "center", marginTop: "6em" }}>
        <div className="spinner-border text-secondary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}
// More Utlities below for later...
export default  spinner ;
