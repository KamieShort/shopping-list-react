import { useReducer, useState } from 'react';
import React from 'react';

const initialState = [{ id: 0, text: 'eggs', done: false }];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const addItem = [
        { id: Date.now(), text: action.payload.text, done: false },
        ...state,
      ];

      return addItem;
    }

    case 'EDIT_ITEM':
      return items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, text: action.payload.text };
        }

        return item;
      });

    case 'DELETE_ITEM':
      return state.filter((item) => item.id !== action.payload.id);

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

  const handleEdit = (id) => {
    dispatch({ type: 'EDIT_ITEM', payload: { id: id } });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_ITEM', payload: { id: id } });
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

            <input
              type="text"
              value={item}
              onChange={(e) => handleEdit(e.target.value)}
            />
            <button onChange={handleEdit}>Edit</button>

            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
