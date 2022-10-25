import './App.css';
import { Product } from './Product';
import { SearchBar } from './SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Product 
      name="Amazon Echo" 
      description="Your AI assistant" 
      price={59.99}
      />
    </div>
  );
}


export default App;
