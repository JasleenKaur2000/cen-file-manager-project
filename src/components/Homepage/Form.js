import React from "react";
import "styles/Home.scss";

function Form() {
  return (
    <div className="second">
      <div className="form">
        <form>
          <label className="label">Set your account pin</label>
          <input
            className="f1"
            type="text"
            name="pin"
            placeholder="Enter new pin"
          />
          <input
            className="2"
            type="text"
            name="pin"
            placeholder="Confirm new pin"
          />
          <button className="button" type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
