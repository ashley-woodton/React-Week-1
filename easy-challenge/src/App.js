import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super();
    this.state = {
      person: {

      }
    }
  }
  render(){
  return (
    <div className="App">
      <h1>Ashley Woodton</h1>
      <p>123-456-7890</p>
      <p>07/18/1997</p>
    </div>
  );
}
}

export default App;
