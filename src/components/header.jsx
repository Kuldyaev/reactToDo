import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <h2 className="headerBox1">
          <p className="letters">ToDo App</p>
        </h2>
        <p>logout</p>
      </header>
    );
  }
}

export default Header;
