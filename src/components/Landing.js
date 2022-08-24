import { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      users: [{ name: "Mohamad" }, { name: "ali" }, { name: "Tarteel" }],
    };
  }

  render() {
    return (
      <div className="landing-container">
        <p>Who's Watching?</p>
        <div className="users">
          {this.state.users.map((u) => {
            return (
              <Link className="user" key={u.name} to="catalog">
                {u.name}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Landing;
