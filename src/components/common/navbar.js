import React from 'react'
import { withRouter } from 'react-router-dom'

class Navbar extends React.Component {
  takeMeHome = () => {
    this.props.history.push("/feed");
  };

  logout = () => {
    localStorage.removeItem("token");
    this.props.history.push("/");
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" >
            Infeedo
          </a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a
                onClick={this.takeMeHome}
                className="nav-link"
              >
                Feed
              </a>
            </li>
          </ul>
          <a
            onClick={this.logout}
            className="nav-link text-white"
          >
            logout
          </a>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
