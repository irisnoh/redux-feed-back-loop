
import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux'
import { Link} from 'react-router-dom'

class Comments extends Component {
  render() {
    return (
      <>
IN UNDERSTANDING Comments
<Link to="/">
                    <button>Submit</button>
                </Link>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState
}

export default connect(mapReduxStateToProps)(Comments);
