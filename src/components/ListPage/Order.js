import React, { useState } from "react";
import orderSvg from "../../assets/order.svg";
import classes from "./Order.module.css";

const Order = (props) => {
  const [orderDiv, setOrderDiv] = useState(false);

  const [liclas,setliclass] = useState(null);

  const orderVisible = () => {
    setOrderDiv(!orderDiv);
  };
  
  let orderData;

  const selectOrder = (event) => {
    let orderBy = event.target.textContent;
    switch (orderBy) {

      case "Name ascending":
        orderData = props.filteredData.sort((a, b) => a[0] > b[0] ? 1 : b[0] > a[0] ? -1 : 0);
        setOrderDiv(false);
        setliclass(orderBy)
        return props.orderCallback(orderData);

      case "Name descending":
        orderData = props.filteredData.sort((a, b) =>b[0] > a[0] ? 1 : a[0] > b[0] ? -1 : 0);
        setOrderDiv(false);
        setliclass(orderBy)
        return props.orderCallback(orderData);

      case "Year ascending":
        orderData = props.filteredData.sort((a, b) => { return a[3].split("/")[2] - b[3].split("/")[2];});
        setOrderDiv(false);
        setliclass(orderBy)
        return props.orderCallback(orderData);

      case "Year descending":
        orderData = props.filteredData.sort((a, b) => {return b[3].split("/")[2] - a[3].split("/")[2];});
        setOrderDiv(false);
        setliclass(orderBy)
        return props.orderCallback(orderData);

      default:
        return null;
    }
  };
 
  return (
    <React.Fragment>
      { props.filteredData.length >=2 &&
    <div>
      <div className={classes["order-div"]} onClick={orderVisible}>
        <img src={orderSvg} alt="Not Found" />
        <p>Order By</p>
      </div>
      {orderDiv && (
        <ul className={classes["ul-div"]} onClick={selectOrder}>
          <li className={liclas=== "Name ascending" ? classes.active : {}}>Name ascending</li>
          <li className={liclas=== "Name descending" ? classes.active : {}}>Name descending</li>
          <li className={liclas=== "Year ascending" ? classes.active : {}}>Year ascending</li>
          <li className={liclas=== "Year descending" ? classes.active : {}}>Year descending</li>
        </ul>
      )}
    </div>
    }
    </React.Fragment>
  );
};

export default Order;
