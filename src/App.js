import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';
import { StyledButton } from './StyledComponents/StyledComponents';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: "1", name: 'Jamie', age: 23 },
      { id: "2", name: 'Nico', age: 22 },
      { id: "3", name: 'Pat', age: 66 },
      { id: "4", name: 'Jim', age: 76 }
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id ) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState({persons: persons});
  }
  
  render() {
    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            </ErrorBoundary>
          })}
        </div>
      );
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle People</StyledButton>
          {persons}
      </div>
    );
  }
}

export default App;
