import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {

state = {
  persons: [
    {
    id: "adsads",  name: 'Max', age: 28
    },
    {
    id: "adsse",  name: 'Menu', age: 26
    },
    {
    id: "adsassa",  name: 'Stephanie', age: 255
    }
  ],
  otherState: 'some other value',
  showPersons: false
}

deletePersonHandler = (personIndex) => {
 // const persons = this.state.persons.slice();
 const persons = [...this.state.persons];
 persons.splice(personIndex,1);
 this.setState({persons: persons});
}

nameChangedHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person = {...this.state.persons[personIndex]};

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState(
    {
      persons: persons
    }
  )
}

togglePersonHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});

}


  render() {

    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person key={person.id}  changed={(event) => this.nameChangedHandler(event, person.id)} click={() => this.deletePersonHandler(index)} name={person.name} age={person.age} />
        })}

      </div>

      );
    }
    return (
      <div className="App">

          <h1> Hi , I am react app </h1>
          <button
          style={style}
          onClick={this.togglePersonHandler} >Toggele Person </button>
          {persons}

      </div>
    );
  }
}

export default App;
