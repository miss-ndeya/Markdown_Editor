import React from "react";
import EditeurText from "./EditeurText";
import AfficheText from "./AfficheText";

const Section = ({ onChange, value, children }) => {
  return (
    <div className="container-fluid">
      <div className="row d-flex flex- justify-content-md-start gap-5">
        <EditeurText
          className="col-12 col-md-7  bg-secondary mx-sm-auto mx-md-0 rounded-3 text-wrap "
          cols="40"
          rows="12"
          value={value}
          onChange={onChange}
        />
        <AfficheText
          className="col-12 col-md-3 d-sm-block aff text-dark   mx-sm-auto mx-md-0 bg-white rounded-3"
          children={children}
        />
      </div>
    </div>
  );
};

export default Section;
