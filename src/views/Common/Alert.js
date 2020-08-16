import React, { Component } from 'react';

class Alert extends Component {

  render() {

    var type = this.props.alert.type;
    var symbol = "";
    if(type === "alert-danger") {
        symbol = "exclamation-circle"
    }
    if(type === "alert-success") {
        symbol = "check"
    }
    if(type === "alertwarning") {
        symbol = "info-circle"
    }
    

    return (
      <div className={"well well-sm " + this.props.alert.type} >
        {/*<div className="cross-times" ><i className="fa fa-times" ></i></div>*/}
        <i className={"fa fa-" + symbol}></i>{" "}
        {this.props.alert.message}
      </div>
      );
    }
  }

export default Alert;