import { useState } from 'react';

import React from 'react';

export default function List({ item, edit, remove }) {
  const [editing, setEditing] = useState(false);

  let conditionalContent;

  if (setEditing) {
    conditionalContent = (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setEditing(false);
        }}
      >
        <input
          value={item.text}
          onChange={(e) => {
            edit({
              ...item,
              text: e.target.value,
            });
          }}
        />
        <button type="submit">Save</button>
      </form>
    );
  } else {
    content = (
      <div>
        <p>{item.text}</p>
      </div>
    );
  }

  return <div>List</div>;
}
