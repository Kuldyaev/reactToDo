import { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <main>
        <div class='notfound'>
          <h1>404</h1>
          <h3>страница не найдена</h3>
          <Link to='/' class='link'>перейти на главную</Link>
        </div>
      </main>
    );
  }
}

export default NotFound;
