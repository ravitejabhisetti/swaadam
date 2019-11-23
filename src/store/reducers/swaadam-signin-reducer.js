import * as ActionTypes from '../actions/swaadam-action-types';
import * as Constants from '../../common/swaadam-constants';

const initialState = {
    userMobileNumber: '',
    userDetails: null,
    userSignedIn: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.Update_User_Mobile_Number:
            return {
                ...state,
                userMobileNumber: action.userMobileNumber
            }
        case ActionTypes.Update_User_Details:
            console.log('action to check---', action);
            return {
                ...state,
                userDetails: action.userPresence ? action.userDetails : null,
                // userSignedIn: action.userPresence ? true : false,
            }
        case ActionTypes.Update_User_Sign_In:
            return {
                ...state,
                userSignedIn: action.userSignedIn ? true : false
            }

        default:
            return state;
    }
}

export default reducer;