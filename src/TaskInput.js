import React, { useState } from "react";
import Styles from "./TaskInput.module.css";
const TaskInput = ({ onAddItem }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Work");
  const [customCategory, setCustomCategory] = useState("");

  //ADDING A NEW ITEM
  const handleSubmit = (e) => {
    e.preventDefault();
    const finalCategory = category === "Custom" ? customCategory : category;
    if (text.trim()) {
      onAddItem(text, finalCategory);
      setText(""); // Clear the input
      setCustomCategory("");//Clear custom category
    }
  };

  return (
    <form onSubmit={handleSubmit} className={Styles.Form}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className={Styles.Input}
      /><br/>
      <label className={Styles.Label}>CATEGORY:</label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: "10px", marginLeft: "10px" }}
      >
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
        <option value="Custom">Custom</option>
      </select>
      {category === "Custom" && (
        <input
          type="text"
          required
          value={customCategory}
          onChange={(e) => setCustomCategory(e.target.value)}
          placeholder="Enter custom category..."
          style={{ padding: "10px", marginLeft: "10px", marginTop: "10px" }}
        />
      )}
      <button type="submit" className={Styles.Button}>
        ADD
      </button>
    </form>
  );
};

export default TaskInput;
