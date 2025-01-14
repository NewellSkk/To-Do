import TaskInput from "./TaskInput";
import "./App.css";
import TaskList from "./TaskList";
import { useState } from "react";
import Filter from "./Filter";

function App() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("all"); //FILTER BETWEEN 'ALL','COMPLETE','PENDING'

  const addItemHandler = (text, category) => {
    const newItem = {
      text,
      id: Date.now(),
      completed: false,
      category: category ,
    };
    setItems([...items, newItem]);
  };

  // SELECTING THE ITEMS TO DISPLAY ACCORDING TO FILTER
  const filterResult = 
    filter==="completed"
    ?items.filter(item=>item.completed)
    :filter==="pending"
    ?items.filter(item=>!item.completed)
    :items;

    // TOGGLE ITEM BETWEEN COMPLETE AND PENDING
  const toggleHandler = (id) => {
    setItems(
      items.map((item) => item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };
  return (
    <div className="App">
      <header className="header">
        <h1 className="header-title">My To-Do List</h1>
      </header>
      <TaskInput onAddItem={addItemHandler} />
      <Filter filter={filter} setFilter={setFilter}/>
      <TaskList items={filterResult} toggleItem={toggleHandler} />
    </div>
  );
}

export default App;
