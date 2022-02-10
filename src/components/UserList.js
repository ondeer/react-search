import UserItem from "./UserItem";
import React from "react";

const UserList = (props) => {
  return (
    <React.Fragment>
      <ul>
        <UserItem
          pageItem={props.pageItem}
          filteredData={props.filteredData}
        />
      </ul>
    </React.Fragment>
  );
};

export default UserList;
