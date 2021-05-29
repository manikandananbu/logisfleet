import React from "react";
import { RingLoader } from "react-spinners";

import "./style.css";

function Loading({ loading }) {
  if (loading) {
    return (
      <div className="sweet-loading">
        <div className="loading">
          <RingLoader color={"#D736C2"} />
        </div>
      </div>
    );
  }

  return <div />;
}

export default Loading;
