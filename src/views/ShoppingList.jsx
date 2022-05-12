import { useReducer } from 'react';
import React from 'react';

const initialState = [{ id: 0, text: 'eggs', done: false }];

const reducer = (state, action) => {};

export default function ShoppingList() {
  const [items, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Shopping List</h1>
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
