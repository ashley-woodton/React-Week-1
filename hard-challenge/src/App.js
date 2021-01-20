import React from 'react';
import './App.css';
import BasicInfo from './components/BasicInfo';

class App extends React.Component{
  constructor(props){
    super();
    this.state = {
      persons: [
        {
        name: "Ashley Woodton",
        number: "123-456-7890",
        age: "23",
        birthdate: "07/18/1997"
      },
      {
        name: "Jane Doe",
        number: "555-555-555",
        age: "59",
        birthdate: "10/10/1961"
      },
      {
        name: "New-Year Jones",
        number: "800-989-9999",
        age: "30",
        birthdate: "01/01/1992"
      },
      {
        name: "Sir Reeses Pieces",
        number: "800-468-1714",
        age: "92",
        birthdate: "11/15/1928"
      },
    ]
    }
  }
  render(){
  return (
    <div className="App">
      {this.state.persons.map(person =>{
        return <BasicInfo name={person.name} age={person.age} birthdate={person.birthdate} number={person.number} />
      })}
      
    </div>
  );
}
}

export default App;


