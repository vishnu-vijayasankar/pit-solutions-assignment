/**
* @Developed by @VishnuVijayasankar
*/


import React, { Component } from 'react';

class StartRegistration extends Component {

  registerBtn = () => {
    this.props.history.push({
      pathname: '/register'
    })
  }

  render() {
    return (
        <div class="registerContainer">
            <button className="registerButton" onClick={this.registerBtn}>
              REGISTER
            </button>
        </div>
      );
    }
  }

export default StartRegistration;