import * as ActionTypes from './swaadam-action-types';
import { get } from '../swaadam-service';
import * as Constants from '../../common/swaadam-constants';

export const updateUserMobileNumber = (number) => {
    return {
        type: ActionTypes.Update_User_Mobile_Number,
        userMobileNumber: number
    }
}

export const updateUserDetails = (userDetails, userPresence) => {
    return {
        type: ActionTypes.Update_User_Details,
        userDetails: userDetails,
        userPresence: userPresence
    }
}

export const getUsers = (userMobileNumber) => {
    return dispatch => { return get(Constants.Users_Url) };
}