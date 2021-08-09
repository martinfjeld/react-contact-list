import React, { Component } from "react";
import "./App.scss";
import { CardList } from "./components/card-list/card-list.component";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      persons: [
        {
          name: "Hannah",
        },
        {
          name: "Martin",
        },
        {
          name: "Tea",
        },
      ],
    };
  }

  async componentDidMount() {
    const jsn = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await jsn.json();
    this.setState({ persons: res });
    console.log(res);
  }

  render() {
    return (
      <div className="App">
        <CardList persons={this.state.persons}></CardList>
      </div>
    );
  }
}
