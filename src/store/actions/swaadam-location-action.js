import * as ActionTypes from './swaadam-action-types';
import * as Constants from '../../common/swaadam-constants';
import { get, put } from '../swaadam-service';

export const getLocations = (userMobileNumber) => {
    return dispatch => { return get(Constants.User_Locations_Url) };
}

export const updateUserCurrentLocation = (userCurrentLocation) => {
    return {
        type: ActionTypes.Update_User_Current_Location,
        userCurrentLocation: userCurrentLocation
    }
}

export const addUserLocation = (location, locationDetails, userDetails) => {
    const details = { locationAddress: locationDetails[0].value, locationName: locationDetails[1].value };
    const locationData = {
        userLocation: location,
        userLocationDetails: details
    }
    let url = Constants.Users_Update + userDetails.userId + '.json';
    if (userDetails.locations === 'empty') {
        userDetails.locations = [];
        userDetails.locations.push(locationData);
    } else {
        userDetails.locations.push(locationData);
    }
    return dispatch => { return put(url, userDetails) };
}