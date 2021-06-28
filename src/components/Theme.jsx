import React from "react";
import "../css/Theme.css";
export default function Theme(props) {
  const handleModeChange = () => {
    props.onModeChange(!props.mode);
    if (props.mode) {
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
    }
  };
  return (
    <label>
      <input
        class="toggle-checkbox"
        type="checkbox"
        onClick={handleModeChange}
      ></input>
      <div class="toggle-slot">
        <div class="sun-icon-wrapper">
          <div
            class="iconify sun-icon"
            data-icon="feather-sun"
            data-inline="false"
          ></div>
        </div>
        <div class="toggle-button"></div>
        <div class="moon-icon-wrapper">
          <div
            class="iconify moon-icon"
            data-icon="feather-moon"
            data-inline="false"
          ></div>
        </div>
      </div>
    </label>
  );
}
