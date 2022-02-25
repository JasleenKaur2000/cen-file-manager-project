import React, { useState } from "react";
import classes from "styles/Home.module.scss";
import PropTypes from "prop-types";

function Form({ setShowDash }) {
  const [pin, setPin] = useState("");
  const [confirmedPin, setConfirmedPin] = useState("");
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const pinChangeHandler = (e) => {
    setPin(e.target.value);
  };
  const confirmedPinChangeHandler = (e) => {
    setConfirmedPin(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("jghv");
    if (pin.length != 4) {
      setHasError(true);
      setErrorMessage("*pin must be of length 4");
      return;
    }
    if (pin === confirmedPin) {
      localStorage.setItem("pin", JSON.stringify(pin));
      setHasError(false);
      setShowDash(true);
    } else {
      setHasError(true);
      setErrorMessage("*pin does not matches");
    }

    return;
  };

  return (
    <form className={classes.forms} onSubmit={onSubmitHandler}>
      <h3>Set your 4-digit account pin</h3>
      <input
        type="number"
        onChange={pinChangeHandler}
        value={pin}
        placeholder="Enter new Pin"
      />

      <input
        type="number"
        onChange={confirmedPinChangeHandler}
        value={confirmedPin}
        placeholder="Confirm new Pin"
      />
      {hasError && <p className={classes.error_text}>{errorMessage}</p>}

      <button onClick={onSubmitHandler}>Submit</button>
    </form>
  );
}
Form.propTypes = {
  setShowDash: PropTypes.func,
};
export default Form;
