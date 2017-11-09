import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
          <p>boooooooooooooo</p>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

          <li className="nav-item">
              <Link to="/login" className="nav-link">
                  Sign in
              </Link>
          </li>


          <li className="nav-item">
              <Link to="/login" className="nav-link">
                  LOL LOL LOL
              </Link>
          </li>
              <Link to="/xxx" className="nav-link">
              XXX
            </Link>
          </li>

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Dou
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Medium
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Sign in
          </Link>
        </li>
        <li>fdbadna</li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Sign up
          </Link>
        </li>

      </ul>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/editor" className="nav-link">
            <i className="ion-compose"></i>&nbsp;New Post
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Settings
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to={`/@${props.currentUser.username}`}
            className="nav-link">
            <img src={props.currentUser.image} className="user-pic" alt={props.currentUser.username} />
            {props.currentUser.username}
          </Link>
        </li>

      </ul>
    );
  }

  return null;
};

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">

            <button onClick={()=>alert('ho-ho-hodor')}>Ho-Ho-Hodor</button>
          <Link to="/" className="navbar-brand">
            {this.props.appName.toLowerCase()}
          </Link>

          <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} />
        </div>
      </nav>
    );
  }
}

export default Header;
