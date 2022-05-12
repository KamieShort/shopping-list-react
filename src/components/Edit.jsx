import React from 'react';

export default function Edit({ item, edit }) {
  return (
    <div>
      <form>
        <input
          value={item}
          onChange={(e) => {
            edit({ ...item, text: e.target.value });
          }}
        />
        <button onChange={edit}>Edit</button>
      </form>
    </div>
  );
}
