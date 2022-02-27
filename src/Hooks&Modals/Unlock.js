import React, { useState } from "react";
import classes from "./styling.module.scss";
import PropTypes from "prop-types";

const UnlockModal = ({ AccountPin, setLock }) => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [error, setError] = useState(false);

  const toggleHandler = (element, index) => {
    if (element.value != "" && element.nextSibling && index != 4) {
      element.nextSibling.focus();
    } else if (element.value === "" && element.previousSibling) {
      element.previousSibling.focus();
    }
    return;
  };
  const onClickUnlockHandler = () => {
    const enteredPin = otp.join("");
    if (enteredPin === AccountPin) {
      setLock(false);
      console.log("matched");
    } else {
      setError(true);
    }
  };
  const handleChange = (element, index) => {
    if (isNaN(element.value)) {
      return;
    }
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    toggleHandler(element, index);
  };

  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <div className={classes.contents}>
          <h2 className={classes.heading}>Enter Account Pin</h2>
          <div className={classes.inputs}>
            {otp.map((data, index) => {
              return (
                <input
                  className={classes.pin_feild}
                  type="text"
                  name="otp"
                  maxLength="1"
                  id={String(index)}
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onClickUnlockHandler();
                    } else if (e.key === "Backspace") {
                      console.log("bsc");
                      toggleHandler(e, index);
                    }
                  }}
                />
              );
            })}
          </div>
          {error && (
            <p className={classes.error_message}>*Pin is not correct</p>
          )}
          <div className={classes.buttons}>
            <button onClick={() => setOtp([...otp.map(() => "")])}>
              Clear
            </button>
            <button className={classes.unlock} onClick={onClickUnlockHandler}>
              Unlock
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
UnlockModal.propTypes = {
  AccountPin: PropTypes.string,
  setLock: PropTypes.func,
};
export default UnlockModal;
