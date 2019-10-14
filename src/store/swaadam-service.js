import * as Constants from '../common/swaadam-constants';

export const get = (url) => {
    return fetch(url, {
        method: Constants.Method_Get
    });
}