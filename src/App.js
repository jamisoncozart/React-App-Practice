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

  switchNameHandler = () => {
    // this.state.persons[0].name="Jamison"; DONT TO THIS
    this.setState({
      persons: [
        { name: 'Jamison', age: 23 },
        { name: 'Nichole', age: 22 },
        { name: 'Patricia', age: 66 },
        { name: 'James', age: 76 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
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
