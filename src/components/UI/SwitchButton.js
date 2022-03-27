import React, { useEffect, useState } from "react";
import classes from "./SwitchButton.module.css";
export default function SwitchButton(props) {
  const [isSwitch, setIsSwitch] = useState(false);

  function handleSwitchChange() {
    setIsSwitch(!isSwitch);
  }

  useEffect(() => {
    props.onSwitchActive(isSwitch);
  }, [isSwitch]);

  return (
    <div>
      <label className={classes.switch}>
        <input
          type="checkbox"
          onChange={handleSwitchChange}
          checked={isSwitch}
        />
        <span className={`${classes.slider} ${classes.round}`}></span>
        <h2>Active</h2>
      </label>
    </div>
  );
}
