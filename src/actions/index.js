export const PROMISETEST = 'PROMISETEST';

export const CREATE_APP = 'CREATE_APP';
export function createApp(baseUrl) {
    return {
        type: CREATE_APP,
        baseUrl
    };
}

export const CREATE_APP_DONE = 'CREATE_APP_DONE';
export function createAppDone(codeUrl, clientId, clientSecret) {
    return {
        type: CREATE_APP_DONE,
        codeUrl,
        clientId,
        clientSecret
    };
}

export const GET_AUTH = 'GET_AUTH';
export function getAuth(baseUrl) {
    return {
        type: GET_AUTH,
        baseUrl
    };
}

export function promiseTest() {
    return {
        type: PROMISETEST,
        value: 777
    };
}
