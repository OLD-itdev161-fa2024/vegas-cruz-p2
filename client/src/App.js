import React from 'react';
import './App.css';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


class App extends React.Component {
  state = {
    data: null
  }

  componentDidMount(){
    axios.get('http://localhost:5000')
    .then((response) => {
      this.setState({
        data: response.data
      })
    })
    .catch((error) => {
      console.error(`Error fetching data: ${error}`);
    })
  }

  render(){
    return(
      <Router exact path="/">
        <div className='App'>
          <header className='App-header'>
            <h1>Developed by <b>Vegas Cruz</b></h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/mywork">My Work</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
            </ul>
          </header>
          <main>
            <Route exact path="/">
              {this.state.data}
            </Route>
            <Switch>
              <Route path="/about">
                About
              </Route>
              <Route path="/contact">
                Contact
              </Route>
              <Route path="/myWork">
                My Work
              </Route>
              <Route path="/resume">
                Resume
              </Route>
              <Route path="/signin">
                Sign In
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
