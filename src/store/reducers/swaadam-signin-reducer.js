import * as ActionTypes from '../actions/swaadam-action-types';
import * as Constants from '../../common/swaadam-constants';

const initialState = {
    userMobileNumber: '',
    userDetails: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.Update_User_Mobile_Number:
            return {
                ...state,
                userMobileNumber: action.userMobileNumber
            }
        case ActionTypes.Update_User_Details:
            return {
                ...state,
                userDetails: action.userPresence ? action.userDetails : null
            }
        default:
            return state;
    }
}

export default reducer;