import React, { Component } from 'react';
import './App.css';
import Loader from './Loader';
import { Link } from 'react-router-dom';
var FontAwesome = require('react-fontawesome');

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 1000)
  }

  myFunction = (e) => {
    document.querySelector(".arrowRight").style.color = "#" + (Math.random() * 16777215 | 0).toString(16);
    //16777215
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoading ? <Loader className="loaderClass" /> :
          <div className="bgWrapper">
            <div className="container-fluid">
            <div className="row">
              <div className="col-3">
                <FontAwesome className="fontAwesomeIconStyle bookIcon"
                  name="book" size="4x" />
              </div>
              <div className="col-9">
                <ul className="landingMenuItems">
                  <li><Link to="/buy" className="quickLinks">DONATE</Link></li>
                  <li><Link to="/buy" className="quickLinks">SELL</Link></li>
                </ul>
              </div>
            </div>
            </div>
            <div className="orgNameDiv">
              <span className="brandName">BOOK ME</span>
            </div>
            <div className="mainSearch">
              <input type="text" placeholder="Search by Title or Author" onKeyPress={this.myFunction} className="txtLandingPage_SearchText" />
              <FontAwesome className="fontAwesomeIconStyle arrowRight"
                name="arrow-right" size="2x" />
            </div>
          </div>}
      </div>
    );
  }
}

export default Login;
