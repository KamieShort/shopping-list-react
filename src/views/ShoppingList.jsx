import { useReducer, useState } from 'react';
import React from 'react';
import Item from '../components/Item';

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
      return state.map((item) => {
        if (item.id === action.payload.item.id) {
          return {
            ...state,
            text: action.payload.item.text,
            done: action.payload.item.done,
          };
        }

        return state;
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

  const handleEdit = (item) => {
    dispatch({ type: 'EDIT_ITEM', payload: { item } });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_ITEM', payload: { id: id } });
  };

  return (
    <div>
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
            <Item item={item} edit={handleEdit} remove={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}
