import React from 'react';
import { useItems } from '../context/ItemProvider';

export default function Header() {
  const { items } = useItems();
  return (
    <div>
      <h1>Shopping List</h1>
      <h3>Items in cart: {items.length}</h3>
    </div>
  );
}
