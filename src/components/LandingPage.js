import React from "react";
import tesodevImg from "../assets/tesodev.png";
import classes from "./LandingPage.module.css";
import UserList from "./UserList.js";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput"

const LandingPage = (props) => {
  const pageItem = {firstIndex:0, lastIndex:3}

  let listItem;

  if (props.inputValue !== "") {
    listItem = (
      <React.Fragment>
        {props.filteredData.length !== 0 && (
          <div className={classes["card-div"]}>
            <UserList
              inputValue={props.inputValue}
              pageItem={pageItem}
              filteredData={props.filteredData}/>

            {props.filteredData.length >= 3 && (
              <Link to="/search_page"style={{color: "black",cursor: "pointer",textAlign: "center"}}>
                <p>Show more...</p>
              </Link>
            )}
          </div>
        )}
      </React.Fragment>
    );
  }
  if (props.inputValue === "") {
    listItem = "";
  }

  return (
    <div className={classes["parent-div"]}>
      <div className={classes["icon-div"]}>
        <img src={tesodevImg} alt="NotFound" />
        <br />
        <label>Search web app</label>
      </div>

      <SearchInput inputCallback={props.inputCallback} inputValue={props.inputValue} filteredDataLength={props.filteredData.length}/>
      
      {listItem}
    </div>
  );
};

export default LandingPage;
