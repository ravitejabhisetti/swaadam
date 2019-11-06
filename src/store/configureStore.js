import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import userSignInReducer from './reducers/swaadam-signin-reducer';
import userLocationsReducer from './reducers/swaadam-location-reducer';

const rootReducer = combineReducers({
    form: formReducer,
    userDetails: userSignInReducer,
    userLocations: userLocationsReducer
});

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;