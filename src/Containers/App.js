import React, { Component } from 'react';
import './App.css';
import '../Components/Persons/Person/Person.css';
import Persons from '../Components/Persons/Persons';
import Header from '../Components/Header/Header';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: "1", name: 'Jamie', age: 23 },
      { id: "2", name: 'Nico', age: 22 },
      { id: "3", name: 'Pat', age: 66 },
      { id: "4", name: 'Jim', age: 76 }
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
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
    console.log('[App.js] render')
    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      );
    }

    return (
      <div className="App">
        <Header
          title={this.props.appTitle}
          showing={this.state.showPersons}
          click={this.togglePersonsHandler}
          persons={this.state.persons} />
        {persons}
      </div>
    );
  }
}

export default App;
