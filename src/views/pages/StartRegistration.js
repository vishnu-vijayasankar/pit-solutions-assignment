/**
* @Developed by @VishnuVijayasankar
*/


import React, { Component } from 'react';
import { Link } from "react-router-dom";

class StartRegistration extends Component {

  render() {
    return (
        <div class="registerContainer">
            <button className="registerButton ">
              <Link to="/register">REGISTER</Link>
            </button>
        </div>
      );
    }
  }

export default StartRegistration;