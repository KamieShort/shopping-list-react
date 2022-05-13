import { createContext, useContext, useReducer } from 'react';

const initialState = [{ id: Date.now(), text: 'grapes', done: false }];

const reducer = (state, action) => {
  console.log(state, action);
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
            ...item,
            text: action.payload.item.text,
            done: action.payload.item.done,
          };
        }

        return item;
      });

    case 'DELETE_ITEM':
      return state.filter((item) => item.id !== action.payload.id);

    default:
      throw new Error('not supported');
  }
};

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, dispatch] = useReducer(reducer, initialState);

  const handleAddItem = (text) => {
    dispatch({ type: 'ADD_ITEM', payload: { text } });
  };

  const handleEdit = (item) => {
    dispatch({ type: 'EDIT_ITEM', payload: { item } });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_ITEM', payload: { id: id } });
  };
  return (
    <ItemContext.Provider
      value={{ items, handleAddItem, handleEdit, handleDelete }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export const useItems = () => {
  const context = useContext(ItemContext);

  if (context === undefined)
    throw new Error('useItems must be called from within a ItemProvider');

  return context;
};
