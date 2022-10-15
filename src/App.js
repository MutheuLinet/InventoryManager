import './App.css';
import Info from './Info.js' 

function App() {
  return (
    <div className="App">
    <Info />
    <AddItem text='linet' number={1}/>
    <AddItem text='lynne'/>
    <AddItem text='test'/>
    </div>
  );
}

function AddItem(props){
  const value= props.text; //accessing props,by default props are javascript objects with name and value
  return(
    <form>
      <label for="text-form">Type Something: </label>
      <input type="text" defaultValue={value} id="text-form"/>
    </form>
  );
}
export default App;
