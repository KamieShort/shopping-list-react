import ShoppingList from './views/ShoppingList';
import Header from './components/Header';
import { ItemProvider } from './context/ItemProvider';

export default function App() {
  return (
    <div>
      <ItemProvider>
        <Header />
        <ShoppingList />
      </ItemProvider>
    </div>
  );
}
