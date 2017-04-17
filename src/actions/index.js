export const PROMISETEST = 'PROMISETEST';

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
