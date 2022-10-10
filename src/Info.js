//create info class component, it extends from React thus import react

import React from 'react';

class Info extends React.Component {
  render() {
    const title = "Inventory System";
    const showTitle = true;
    if(showTitle) {
      return(
        <div>
          <h1>{title}</h1>
          <p>Manage your stuff</p>
        </div>
      );
    } else {
      return <p>empty</p>
    }
  }
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