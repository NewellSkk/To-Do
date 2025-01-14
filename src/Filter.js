import React from "react";
import Styles from "./Filter.module.css";
const Filter = ({ filter, setFilter }) => {
  return (
    <div className={Styles.Filter}>
      <button
        onClick={() => setFilter("all")}
    className={`${Styles.Button} ${filter==='all'?Styles.Active:""}`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`${Styles.Button} ${filter==='completed'?Styles.Active:""}`}

      >
        Completed
      </button>
      <button
        onClick={() => setFilter("pending")}
        className={`${Styles.Button} ${filter==='pending'?Styles.Active:""}`}

      >
        Pending
      </button>
    </div>
  );
};

export default Filter;