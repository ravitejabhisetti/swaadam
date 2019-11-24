import * as Constants from '../common/swaadam-constants';

export const get = (url) => {
    return fetch(url, {
        method: Constants.Method_Get
    });
}

export const post = (url, body) => {
    return fetch(url, {
        method: Constants.Method_Post,
        body: JSON.stringify(body),
        headers: Constants.Api_Call_Headers
    })
}

export const put = (url, body) => {
    return fetch(url, {
        method: Constants.Method_Put,
        body: JSON.stringify(body),
        headers: Constants.Api_Call_Headers
    })
}