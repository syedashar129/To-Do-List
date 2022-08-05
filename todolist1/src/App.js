import React from 'react';
import {useState} from 'react';
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
      const item = {
        id:Math.random() * 1000,
        value:newItem
      }
  
      setItems(oldList => [...oldList, item]);
      setNewItem("");
  
      console.log("Items", items);
    }
    
  

  const deleteItem = (id) =>{
    const newArray = items.filter(item => item.id !== id)

    setItems(newArray);
  }

  return (
    <div>
      <h1 class="header">To-Do List</h1>

      <input class="input"
      type="text"
      value = {newItem}
      placeholder = "Add an item..."
      onChange = {e => setNewItem(e.target.value)}
      />

     <button class="button3" onClick={addItem}>Add</button>

     



        <ul class="list">
          {items.map(item => {
            return(
              <li key={item.id}>{item.value}    <button onClick={() => deleteItem(item.id)}>Delete</button>  </li>
            )
          })}
        </ul>
     
    </div>
    
  );
}

export default App;
