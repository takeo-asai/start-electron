export const CREATE_APP = 'CREATE_APP';
export function createApp(baseUrl) {
    return {
        type: CREATE_APP,
        baseUrl
    };
}

export const CREATE_APP_DONE = 'CREATE_APP_DONE';
export function createAppDone(clientId, clientSecret) {
    return {
        type: CREATE_APP_DONE,
        clientId,
        clientSecret
    };
}

export const GET_TOKEN = 'GET_TOKEN';
export function getToken(baseUrl, clientId, clientSecret, code) {
    return {
        type: GET_TOKEN,
        baseUrl,
        clientId,
        clientSecret,
        code
    };
}

export const GET_TOKEN_DONE = 'GET_TOKEN_DONE';
export function getTokenDone(token) {
    return {
        type: GET_TOKEN_DONE,
        token
    };
}

export const GET_AUTH = 'GET_AUTH';
export function getAuth(baseUrl) {
    return {
        type: GET_AUTH,
        baseUrl
    };
}
