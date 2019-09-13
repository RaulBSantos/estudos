import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
// App is a COMPONENT
class App extends Component {
  render() {
    // Everythin inside the render method is a ELEMENT
    const helloWorld = 'Welcome to the Road to learn React';
    const people = { name: 'Raul', lastName: 'Bolsonaro' };
    return (
      < div className="App" >
        {/* You can put JS code here */}
        <h2>{helloWorld}</h2>
        <p>Hello {people.name}. Your lastname is {people.lastName}</p>
      </div >
    );
  }
  // }
}
export default App;
