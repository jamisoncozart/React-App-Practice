import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Jamie', age: 23 },
      { name: 'Nico', age: 22 },
      { name: 'Pat', age: 66 },
      { name: 'Jim', age: 76 }
    ]
  }

  switchNameHandler = (newName) => {
  // this.state.persons[0].name="Jamison"; DONT TO THIS
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: newName, age: 22 },
        { name: newName, age: 66 },
        { name: newName, age: 76 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 23 },
        { name: 'Nichole', age: 22 },
        { name: event.target.value, age: 66 },
        { name: 'James', age: 76 }
      ]
    })
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler.bind(this, "Nichole")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          changed={this.nameChangedHandler} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
          changed={this.nameChangedHandler} /> 
        <Person 
          name={this.state.persons[3].name} 
          age={this.state.persons[3].age} 
          click={this.switchNameHandler.bind(this, "Jamie")} /> 
      </div>
    );
    // return (
    //   <div className="App">
    //     <h1>Hi, I'm a React App</h1>
    //   </div>
    // );
    // JSX above gets compiled to this below.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;
