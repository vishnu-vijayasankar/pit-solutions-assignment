
import { userConstants } from '../constants';
import { userService } from '../services';
import { history, isError, frameAlert, serverOffError} from '../helpers';
import { alertActions } from './alert.action';

export const userActions = {
    registerUser
};

function registerUser(email, password, firstName, lastName) {
    return dispatch => {
        dispatch(request({ email, firstName, lastName }));

        userService.registerUser(email, password, firstName, lastName)
            .then(
                user => {
                    if (isError(user.data)) {
                        dispatch(failure(user.data));
                        dispatch(alertActions.error(frameAlert(user.data)));
                    } else {
                        dispatch(success(user.data));
                        dispatch(alertActions.success(frameAlert(user.data)));
                        // history.push('/verify-email');
                    }
                },
                error => {
                    // history.push('/');
                    dispatch(failure(error));
                    dispatch(alertActions.error(serverOffError()));
                }
            );
    };

    function request() { return { type: userConstants.REGISTER_USER_REQUEST } }
    function success(user) { return { type: userConstants.REGISTER_USER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_USER_FAILURE, error } }
}