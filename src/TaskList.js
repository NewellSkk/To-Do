import React from "react";
import Styles from "./TaskList.module.css";
const TaskList = ({ items, toggleItem,deleteItem }) => {
  // GROUPING ITEMS BY CATEGORY
  const dividedTasks = items.reduce((categories, item) => {
    const category = item.category;
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(item);
    return categories;
  }, {});
  return (
    <>
    {/* MAPPING CATEGORIES & NESTED MAPPING OF CATEGORY ITEMS */}
      {Object.keys(dividedTasks).map((category) => (
        <div key={category} className={`${Styles.CategorySection} ${Styles[category]}`}>
          <h3 >{category}</h3>
          <ul className={Styles.CategoryList}>
            {dividedTasks[category].map((item) => (
              <li
                key={item.id}
                className={`${Styles.ListItem} ${
                  item.completed ? Styles.Completed : ""
                }`}
              >
                <span className={Styles.CheckboxContainer}>
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleItem(item.id)}
                    id={`item-${item.id}`}
                    style={{ marginRight: "5px" }}
                  />
                  <label htmlFor={`item-${item.id}`} className={Styles.Checkbox}></label>
                {item.text}<button className={Styles.Delete} onClick={()=>deleteItem(item.id)}>X</button></span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default TaskList;
