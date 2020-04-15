import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Jamie', age: 23 },
      { name: 'Nico', age: 22 },
      { name: 'Pat', age: 66 },
      { name: 'Jim', age: 76 }
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
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
        </div>
      );
    }

    return (
      <div className="App">
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle People</button>
          {persons}
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
