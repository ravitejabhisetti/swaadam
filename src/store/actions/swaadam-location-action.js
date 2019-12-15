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

export const addUserLocation = (location, locationDetails, userDetails, newAddress, addressIndex) => {
    console.log('loc--', location);
    console.log('locationDetails--', locationDetails);
    console.log('userDetails--', userDetails);
    console.log('newAddress--', newAddress);
    console.log('addressIndex--', addressIndex);
    const details = { locationAddress: locationDetails[0].value, locationName: locationDetails[1].value };
    const locationData = {
        userLocation: location,
        userLocationDetails: details
    }
    let url = Constants.Users_Update + userDetails.userId + '.json';
    if (newAddress) {
        if (userDetails.locations === 'empty') {
            userDetails.locations = [];
            userDetails.locations.push(locationData);
        } else {
            userDetails.locations.push(locationData);
        }
    } else {
        userDetails.locations[addressIndex].userLocation = location;
        userDetails.locations[addressIndex].userLocationDetails = details;
        console.log('check main---', userDetails);
    }
    return dispatch => { return put(url, userDetails) };
}