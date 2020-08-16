import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import { isObjEmpty } from '../../helpers/utilities';
import Alert from '../Common/Alert';
import Swal from 'sweetalert2';
import ReactSlider from 'react-slider';
import Select from 'react-select';
import ImageUpload from '../../containers/DefaultLayout/ImageUpload';
import { Link } from "react-router-dom";
import './page.css';

const hobbies = [
    { value: 'hockey', label: 'Hockey' },
    { value: 'football', label: 'Football' },
    { value: 'reading', label: 'Reading' },
    { value: 'cricket', label: 'Cricket' },
];

const countries = [
    { value: 'india', label: 'India' },
    { value: 'us', label: 'US' },
    { value: 'switzerland', label: 'Switzerland' },
    { value: 'china', label: 'China' },
];

const address = [
    { value: 'office', label: 'Office' },
    { value: 'residence', label: 'Residence' }
];


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            state: '',
            email: '',
            message: '',
            age: 0,
            imgURL: '',
            selectedHobby: null,
            selectedCountry: null,
            selectedAddress: null,
            newsLetter: "don't send"
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

    componentWillMount() {
        if(this.props.location.state && (Object.keys(this.props.location.state).length != 0)) {
            this.state = {...this.props.location.state};
            this.setState({
                ...this.state
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { phone, state, firstName, lastName, email, age } = this.state;

        if (!phone || !state || !firstName || !lastName || !email || age == 0) {
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
        this.props.dispatch && this.props.dispatch(userActions.registerUser(phone, state, firstName, lastName));
        this.setState({
            firstName: '',
            lastName: '',
            phone: '',
            state: '',
        })
        this.props.history.push({
            pathname: '/summary',
            state: this.state
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    slideEvent = (val) => {
        this.setState({ age: val })
    }

    handleInputChange = (event) => {
        let newsLetter = event.target.checked ? "send" : "don't send";
        this.setState({ newsLetter: newsLetter });
    };

    render() {
        const { selectedHobby, selectedCountry, selectedAddress, age } = this.state;

        return (
            <div className="main">
                <div className="container">
                    {
                        !isObjEmpty(this.props.alert) && <Alert alert={this.props.alert} />
                    }

                    <ImageUpload
                        imageChange={(url) => {console.log('imgURL => ',url);this.setState({imgURL:url})}}
                        imgURL = {this.state.imgURL}
                    />
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <h3 className='text-center' style={{ color: '#252a33' }}><span>Register</span></h3>
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
                                    <input type="text" name="email" value={this.state.email} onChange={this.changeHandler} className="form-control" placeholder="Email" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Age:</label>
                                <ReactSlider
                                    className="horizontal-slider"
                                    thumbClassName="example-thumb"
                                    trackClassName="example-track"
                                    onBeforeChange={val => console.log('onBeforeChange value:', val)}
                                    onChange={this.slideEvent}
                                    onAfterChange={val => console.log('onAfterChange value:', val)}
                                    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                                    defaultValue={age}
                                />
                            </div>
                            <div className="form-group">
                                <div className="input_icon"> <i className="fa fa-phone-square"></i>
                                    <input type="phone" name="phone" value={this.state.phone} onChange={this.changeHandler} className="form-control" placeholder="Contact Number" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input_icon"> <i className="fa fa-address-card"></i>
                                    <input type="state" name="state" value={this.state.state} onChange={this.changeHandler} className="form-control" placeholder="State" />
                                </div>
                            </div>
                            <div className="form-group">
                                <Select
                                    name="selectedCountry"
                                    value={selectedCountry}
                                    options={countries}
                                    onChange={(val) => { this.handleChange({ target: { name: 'selectedCountry', value: val } }) }}
                                    placeholder="Country"
                                />
                            </div>
                            <div className="form-group">
                                <Select
                                    name="selectedAddress"
                                    value={selectedAddress}
                                    options={address}
                                    onChange={(val) => { this.handleChange({ target: { name: 'selectedAddress', value: val } }) }}
                                    placeholder="Address"
                                />
                            </div>
                            <div className="form-group">
                                <Select
                                    name="selectedHobby"
                                    value={selectedHobby}
                                    options={hobbies}
                                    isMulti
                                    onChange={(val) => { this.handleChange({ target: { name: 'selectedHobby', value: val } }) }}
                                    placeholder="Hobbies"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="checkbox"
                                    onChange={(e) => this.handleInputChange(e)}
                                    checked={this.state.newsLetter == 'send' ? true : false}
                                    style={{marginRight:'5px'}}
                                />
                                <label>Subscribe to the news letter</label>
                            </div>
                            <div className="form-group text-center">
                                <button
                                    type="submit"
                                    className="btn btn-danger"
                                >SUBMIT
                                </button>
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