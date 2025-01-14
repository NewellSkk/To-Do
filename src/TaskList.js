import React from "react";
import Styles from "./TaskList.module.css";
const TaskList = ({ items, toggleItem }) => {
    // GROUPING ITEMS BY CATEGORY
    const dividedTasks=items.reduce((categories,item)=>{
        const category=item.category;
        if(!categories[category]){
            categories[category]=[];
        }
        categories[category].push(item);
        return categories
    },{})
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {items.map((item) => (
        <li
          key={item.id}
          className={`${Styles.ListItem} ${item.completed?Styles.Completed:''}`}
        >
          <input
            type="checkbox"
            checked={item.completed}
            onClick={() => toggleItem(item.id)}
            style={{ marginRight: "10px" }}
          />
          {item.text}
          {item.id}
          {item.category}
          {`${item.completed}`}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
