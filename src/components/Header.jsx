import React from 'react';

export default function Header(items) {
  console.log(items);
  return (
    <div>
      <h1>Shopping List</h1>
      <h3>Items in cart:{items.length} </h3>
    </div>
  );
}
