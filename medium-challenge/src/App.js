import React from 'react';
import './App.css';
import BasicInfo from './components/BasicInfo';

class App extends React.Component{
  constructor(props){
    super();
    this.state = {
      person: {
        name: "Ashley Woodton",
        number: "123-456-7890",
        age: "23",
        birthdate: "07/18/1997"
      }
    }
  }
  render(){
  return (
    <div className="App">
      <BasicInfo name={this.state.person.name} age={this.state.person.age} birthday={this.state.person.birthdate} number={this.state.person.number} />
    </div>
  );
}
}

export default App;

