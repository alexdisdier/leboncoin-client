import React from "react";
import "./Validation.css";

const validation = props => {
  const { isValid } = props;

  let validationMessage = "mauvais mot de passe";

  if (!isValid) {
    return (
      <div className="error-message" style={{ color: "red" }}>
        {validationMessage}
      </div>
    );
  } else {
    return <div />;
  }
};

export default validation;
