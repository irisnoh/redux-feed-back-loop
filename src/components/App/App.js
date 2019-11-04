import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import Admin from '../Admin/Admin'

class App extends Component {
  render() {
    return (
      <Router>

        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />
          {/* home page is feeling */}
          <Route path="/Feeling" component={Feeling} />
          <Route path="/Understanding" component={Understanding} />
          <Route path="/Supported" component={Supported} />
          <Route path="/Comments" component={Comments} />
          <Route path="/ReviewFeedback" component={ReviewFeedback} />
          <Route path="/" component={Admin} />


        <Feeling />
        <Understanding />
        <Supported />
        <Comments />
        <ReviewFeedback />
        </div>
      </Router>
    );
  }
}
const mapReduxStateToProps = (reduxState) => {
  return reduxState
}

export default connect(mapReduxStateToProps)(App);

