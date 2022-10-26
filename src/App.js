import { useState } from 'react';
import { AddItem } from './AddItem';
import './App.css';
import { SearchBar } from './SearchBar';

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ item: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  }
  return (
    <div className="App">
      <SearchBar updateSearchParams={updateFilters} />
      <AddItem />
      {/* <p>Name: {"name" in data ? data["name"] : "No Data to display"}</p>
      <p>Max Price: {"price" in data ? data["price"] : "No Data to display"}</p>
      <p>Type: {"type" in data ? data["type"] : "No Data to display"}</p>
      <p>Brand: {"brand" in data ? data["brand"] : "No Data to display"}</p> */}

      {/* <Product
        name="Amazon Echo"
        description="Your AI assistant"
        price={59.99}
      /> */}
    </div>
  );
}


export default App;
