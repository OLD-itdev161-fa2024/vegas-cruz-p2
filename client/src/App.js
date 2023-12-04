import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import MyWork from './components/MyWork/MyWork';
import SignIn from './components/SignIn/SignIn';
import NavBar from './components/Navbar/navbar';




function App() {
    return(
      <Router>
        <div className='App'>
        <NavBar/>
          <main>
            <Route exact path="/">
            </Route>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/mywork" component={MyWork}/>
              {/* <Route exact path="/resume" component={Resume}/> */}
              <Route exact path="/signin" component={SignIn}/>
            </Switch>
          </main>
        </div>
      </Router>
    );
    }
export default App;
