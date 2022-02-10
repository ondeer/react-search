import React, { Fragment } from "react";
import classes from "./UserItem.module.css";

const UserItem = (props) => {
  const lastData = props.filteredData.slice(props.pageItem.firstIndex, props.pageItem.lastIndex).map((user) => (
      <li className={classes["li-item"]} key={user[0]}>
        <div>
          <label style={{ fontWeight: "bold" }}>
            {user[4]}-{user[5]}
          </label>
          <br />
          <label style={{ fontSize: "0.75rem", opacity: "0.75" }}>
            {user[0]} - {user[3].split("/")[2]}
          </label>
        </div>
        <div>
          <label style={{ fontWeight: "bold" }}>
            <span>Email:</span>
            {user[2]}
          </label>
        </div>
      </li>
    ));

  return <Fragment>{lastData}</Fragment>;
};
export default UserItem;
