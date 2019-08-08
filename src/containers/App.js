import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpits/Cockpit';
import Radium from 'radium';

class App extends Component {
  
  state = {
    Person: [
      { id:'p01' , cssClass: 'PersonEffect1', planet: 'Xandar' },
      { id:'p02' , cssClass: 'PersonEffect2', planet: 'Vormir' },
      { id:'p03' , cssClass: 'PersonEffect3', planet: 'Asgard' },
      { id:'p04' , cssClass: 'PersonEffect4', planet: 'Sakaar' }
    ],
    showPersons: false
  }

  togglePersonHandler = () => {
    const currentSituation = this.state.showPersons;
    this.setState({ showPersons: !currentSituation });
  }

  itemDeleteHandler = (passedIndex) =>{
    const newPersons = [...this.state.Person];
    newPersons.splice(passedIndex,1);
    this.setState({Person : newPersons});
  }

  planetChangeHandler = ( event,id ) => {
    const recievedIndex = this.state.Person.findIndex(p => {
      return p.id === id;
    });

    const newPerson = {
      ...this.state.Person[recievedIndex]
    }
    
    newPerson.planet = event.target.value;
     
    const changedPersons = [...this.state.Person];
    changedPersons[recievedIndex] = newPerson;
    
    this.setState({ Person : changedPersons });
  }

  render() {
    let personView = null;
    if (this.state.showPersons) {
      personView = (
      <div>
        <Persons 
          persons={this.state.Person}
          clicked1={this.itemDeleteHandler}
          changed1={this.planetChangeHandler}  />
      </div>
      );
    }
   
    return (
      <div className="App">
        <Cockpit 
        person={this.state.Person}
        clicked={this.togglePersonHandler}
         />
         {personView}
      </div>
    );
  }
}
export default Radium(App);
