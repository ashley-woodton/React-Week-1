import React from 'react';

class BasicInfo extends React.Component{
  render(){
  return (
    <div>
      <h1>{this.props.name}</h1>
      <p>Age: {this.props.age}</p>
      <p>D.O.B: {this.props.birthdate}</p>
      <p>Number: {this.props.number}</p>
    </div>
  );
}
}

export default BasicInfo;