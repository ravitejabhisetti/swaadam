import * as ActionTypes from '../actions/swaadam-action-types';
import * as Constants from '../../common/swaadam-constants';

const initialState = {
    userLocations: null,
    userCurrentLocation: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.Update_User_Current_Location:
            return {
                ...state,
                userCurrentLocation: action.userCurrentLocation
            }
        default:
            return state;
    }
}

export default reducer;