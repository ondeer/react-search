import classes from "./SearchInput.module.css";
import React,{useState} from "react";

const SearchInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const inputSearch = (event) => {
    setEnteredValue(event.target.value);
  };

  const sendInput = () => {
    props.inputCallback(enteredValue);
  };

  let errorValid = props.inputValue.length > 0 ? (props.filteredDataLength === 0 ? true : false) : false;
  let errorClass = errorValid ? classes.errorvalid : {}

  return (
    <div className={classes["search-div"]}>
        <div className={classes["input-div"]}>
      <input className={errorClass} type="text" onChange={inputSearch} />
      {errorValid && <label className={classes.errortext}>Data Not Match Input</label>}</div>
      <button type="submit" onClick={sendInput}>
        Search
      </button>
    </div>
  );
};

export default SearchInput;
