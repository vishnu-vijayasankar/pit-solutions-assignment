/**
* @Developed by @ArihantBhugari
*/


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import {isObjEmpty} from '../../helpers/utilities';
import Alert from '../Common/Alert';
import Swal from 'sweetalert2';


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            message: '',
        }
    }


    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            message: nextProps.alert
        })
    }



    handleSubmit = (e) => {
        e.preventDefault();

        const { email, password, firstName, lastName } = this.state;

        if (!email || !password || !firstName || !lastName) {
            Swal.fire({
                position: 'center',
                type: 'warning',
                title: 'Fields can not be left blank.',
                showConfirmButton: false,
                timer: 3000,
                width: '29rem',
                allowOutsideClick: false
              })
            // window.alert("Fields can not be left blank.");
            return false;
        }
        this.props.dispatch && this.props.dispatch(userActions.registerUser(email, password, firstName, lastName));
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        })
    }

    render() {
        return (
            <div className="main">
            <div className="container">
             {
            !isObjEmpty(this.props.alert) && <Alert alert={this.props.alert} />
          }
                <div className="shadow_box">
                    <form onSubmit={this.handleSubmit}>
                        <h3 className='text-center' style={{color:'#252a33'}}><span>Register</span></h3>
                        <div className="form-group">
                            <div className="input_icon"> <i className="fa fa-user"></i>
                                <input type="text" name="firstName" value={this.state.firstName} onChange={this.changeHandler} className="form-control" placeholder="Firstname" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input_icon"> <i className="fa fa-user"></i>
                                <input type="text" name="lastName" value={this.state.lastName} onChange={this.changeHandler} className="form-control" placeholder="Lastname" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input_icon"> <i className="fa fa-envelope"></i>
                                <input type="email" name="email" value={this.state.email} onChange={this.changeHandler} className="form-control" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input_icon"> <i className="fa fa-lock"></i>
                                <input type="password" name="password" value={this.state.password} onChange={this.changeHandler} className="form-control" placeholder="Password" />
                            </div>
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-danger">Register</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        alert: state.alert,
    }
}

export default connect(mapStateToProps)(Register);