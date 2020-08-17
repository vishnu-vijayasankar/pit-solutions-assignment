import React, { Component } from "react";
import Alert from '../Common/Alert';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import { isObjEmpty } from '../../helpers/utilities';
import { useLocation, Link } from "react-router-dom";


class Users extends Component {
    constructor(props) {
        super(props);
    }

    editProfile = () => {
        this.props.history.push({
            pathname: '/register',
            state: this.props.location.state
        })
    }

    submitProfile = () => {
        let state = this.props.location.state;
        this.props.dispatch && this.props.dispatch(userActions.registerUser(state.phone, state.state, state.firstName, state.lastName));
    }

    render() {
        // let location = useLocation();
        // console.log('useLocation => ', location);
        let state = this.props.location.state;

        return (
            <div style={{textAlign: 'center'}}>
                {
                    !isObjEmpty(this.props.alert) && <Alert alert={this.props.alert} />
                }
                <div className="mainContainer">
                    
                    <div className="imgContainer">
                        <img src={state.imgURL} />
                        <button onClick={this.editProfile}>
                            EDIT PROFILE
                    </button>
                    </div>

                    <div>
                        I am <span className="textBlue">{state.firstName + ' ' + state.lastName}</span> and I am
                        <span className="textBlue"> {state.age}</span> years old and you can send your emails to
                        <span className="textBlue"> {state.email}</span>. I live in the state of
                        <span className="textBlue"> {state.state}</span>. My hobbies are
                        <span className="textBlue"> {state.selectedHobby.map(value => value['label']).join(', ')}</span>. And please
                        <span className="textBlue"> {state.newsLetter}</span> the news letters. Please reach out to me on my phone
                        <span className="textBlue"> {state.phone}</span>.
                    </div>
                </div>
                <button onClick={this.submitProfile}>
                    SUBMIT PROFILE
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        alert: state.alert,
    }
}

export default connect(mapStateToProps)(Users);