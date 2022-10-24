//create info class component, it extends from React thus import react

import React from 'react';

class Info extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      count: 0,
    }
    // this.buttonPressed = this.buttonPressed.bind(this);
    //onClick{this.button}
  }

  buttonPressed(){
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return(
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.buttonPressed()}>Click Me</button>
      </div>
    )
  }
}
Info.defaultProps = {
  title: "Default",
}
export default Info;

//create info functional component
// export function Info(){
//     const title = "Inventory System";
//     const showTitle = true; //TENARY EXPRESSION BELOW, SHOWS EMPTY STRING IS CONDITION IS FALSE, SHOWS TITLE GIVEN IN VARIABLE IF TRUE OR USE IF ELSE BLOCK 
  
//     return(
//       <div>
//         <h1> {showTitle ? title : ""}</h1> 
//         <p>Manage your stuff</p>
//       </div>
//     );
//   }
  
  //export Info - when importing use curly braces
  //export default Info - can only be used on one component only, when importing no need for curly braces