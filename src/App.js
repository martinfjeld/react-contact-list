import React, { Component } from "react";
import "./App.scss";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      persons: [],
      searchField: "",
    };
  }

  handleChange = (e) => this.setState({ searchField: e.target.value });

  async componentDidMount() {
    const jsn = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await jsn.json();
    this.setState({ persons: res });
    console.log(res);
  }

  render() {
    const { persons, searchField } = this.state;

    const filteredPeople = persons.filter((person) =>
      person.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Contact list</h1>
        <SearchBox
          placeholder="Search people"
          handleChange={this.handleChange}
        />
        <CardList persons={filteredPeople}></CardList>
      </div>
    );
  }
}
