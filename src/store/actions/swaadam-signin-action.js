import * as ActionTypes from './swaadam-action-types';
import { get, post, put } from '../swaadam-service';
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

export const updateUserSignIn = (userSignIn) => {
    return {
        type: ActionTypes.Update_User_Sign_In,
        userSignedIn: userSignIn
    }
}

export const getUsers = (userMobileNumber) => {
    return dispatch => { return get(Constants.Users_Url) };
}

export const addUser = (userMobileNumber, userDetails) => {
    const body = {
        name: userDetails[0].value,
        email: userDetails[1].value,
        mobileNumber: userMobileNumber,
        locations: 'empty'
    }
    return dispatch => { return post(Constants.Users_Url, body) };
}

export const updateUser = (userDetails, entities) => {
    console.log('user details to check---', userDetails);
    const tmpFormDetails = JSON.parse(JSON.stringify(userDetails));
    let url = Constants.Users_Update + userDetails.userId + '.json';
    tmpFormDetails.name = entities[0].value;
    tmpFormDetails.email = entities[1].value;
    return dispatch => { return put(url, tmpFormDetails) };
}

export const updateUserLocations = (locations) => {
    return {
        type: ActionTypes.Update_User_Locations,
        locations: locations
    }
}