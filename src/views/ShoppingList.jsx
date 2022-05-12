import { useReducer, useState } from 'react';
import React from 'react';

const initialState = [{ id: 0, text: 'eggs', done: false }];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newState = [
        { id: state.length, text: action.payload.text, done: false },
        ...state,
      ];
      console.log(newState);
      return newState;
    }
    default:
      throw new Error('not supported');
  }
};

export default function ShoppingList() {
  const [items, dispatch] = useReducer(reducer, initialState);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_ITEM', payload: { text: newItem } });
    setNewItem('');
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          name="newItem"
          value={newItem}
          placeholder="new item"
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button>Add</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
