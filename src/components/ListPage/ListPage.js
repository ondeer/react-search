import tesodevImg from "../../assets/tesodev.png";
import React, { useState } from "react";
import classes from "./ListPage.module.css";
import UserList from "../UserList.js";
import Pagination from "./Pagination";
import Order from "./Order";
import SearchInput from "../SearchInput";
import { Link } from "react-router-dom";

const ListPage = (props) => {
  const [pageItem, setPageItem] = useState({ firstIndex: 0, lastIndex: 5 });
  const [veri, setVeri] = useState(props.data);
 
  const pageNumberCallback = (firstIndex, lastIndex) => {
    setPageItem({ firstIndex, lastIndex });
  };

  const orderCallback = (childData) => {
    setVeri(Object.values(childData));
  };

  const gotoHomePage = ()=>{
    props.filteredData = {}
  }

  return (
    <div className={classes["parent-div"]}>
      <div className={classes["header-div"]}>
        <Link to="/" onClick={gotoHomePage} style={{marginRight: '5%'}}>
        <img src={tesodevImg} alt="NotFound" />
        </Link>
        <SearchInput inputCallback={props.inputCallback} inputValue={props.inputValue} filteredDataLength={props.filteredData.length}/>
      </div>
      <div>
        <Order filteredData={props.filteredData} orderCallback={orderCallback} />
        <div>
          <UserList
            filteredData={props.filteredData}
            pageItem={pageItem}
          />
        </div>
        <Pagination filteredData={props.filteredData} pageNumberCallback={pageNumberCallback} />
      </div>
    </div>
  );
};
export default ListPage;
