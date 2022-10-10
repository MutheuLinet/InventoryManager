import './App.css';
import Info from './Info.js' 
function App() {
  return (
    <div className="App">
    <Info />
    <AddItem />
    </div>
  );
}


function AddItem(){
  const value="default";
  return(
    <form>
      <label for="text-form">Type Something: </label>
      <input type="text" defaultValue={value} id="text-form"/>
    </form>
  );
}
export default App;
