import * as ActionTypes from './swaadam-action-types';
import * as Constants from '../../common/swaadam-constants';
import { get, post } from '../swaadam-service';

export const getLocations = (userMobileNumber) => {
    return dispatch => { return get(Constants.User_Locations_Url) };
}

export const updateUserCurrentLocation = (userCurrentLocation) => {
    return {
        type: ActionTypes.Update_User_Current_Location,
        userCurrentLocation: userCurrentLocation
    }
}