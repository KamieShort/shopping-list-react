import { useState } from 'react';

import React from 'react';

export default function Item({ item, edit, remove }) {
  const [editing, setEditing] = useState(false);

  let conditionalContent;

  if (editing) {
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
    conditionalContent = (
      <div>
        <p>{item.text}</p>
        <button type="button" onClick={() => setEditing(true)}>
          Edit
        </button>
      </div>
    );
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => {
          edit({
            ...item,
            done: e.target.checked,
          });
        }}
      />
      {conditionalContent}
      <button type="button" onClick={() => remove(item.id)}>
        Delete
      </button>
    </div>
  );
}
