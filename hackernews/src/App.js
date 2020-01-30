import React, { Component } from "react";
import "./App.css";
import moment from "moment";

const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

class Timer {
  constructor() {
    this.current = this.clock();
  }
  clock() {
    return moment().format("DD/MM/YYYY, HH:mm:ss");
  }
}

// function App() {
// App is a COMPONENT
class App extends Component {
  render() {
    const timer = new Timer();
    // Everythin inside the render method is a ELEMENT
    return (
      <div className="App">
        <span>Data: {timer.current}</span>
        {list.map(item => (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>
        ))}
      </div>
    );
  }
  // }
}
export default App;
