import React from 'react';
import './App.css';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import MyWork from './components/MyWork/MyWork'
import Resume from './components/Resume/Resume'
import SignIn from './components/SignIn/SignIn'


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
      <Router>
        <div className='App'>
          <header className='App-header'>
            <h1>Developed by Vegas Cruz</h1>
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
              <Route exact path="/about" component={About}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/mywork" component={MyWork}/>
              <Route exact path="/resume" component={Resume}/>
              <Route exact path="/signin" component={SignIn}/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
