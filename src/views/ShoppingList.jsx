import { useState } from 'react';
import React from 'react';
import Item from '../components/Item';
import { useItems } from '../context/ItemProvider';

export default function ShoppingList() {
  const [newItem, setNewItem] = useState('');
  const { items, handleAddItem, handleEdit, handleDelete } = useItems();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddItem(newItem);
    setNewItem('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
