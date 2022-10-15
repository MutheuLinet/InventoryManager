import './App.css';
import Info from './Info.js' 

function App() {
  return (
    <div className="App">
    <Info />
    <AddItem text='linet' number={0}/>
    <AddItem text='lynne'number={1}/>
    <AddItem text='test'number={2}/>
    </div>
  );
}

function AddItem(props){
  const value= props.text; //accessing props,by default props are javascript objects with name and value
  return(
    <form>
      <label for="text-form">Type Something: </label>
      <input type="text" defaultValue={value} id="text-form"/>
      <p>{props.number}</p>
    </form>
  );
}
export default App;
