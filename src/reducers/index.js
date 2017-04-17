import * as Actions from '../actions';

const initState = {
    baseUrl: 'https://',
    clientId: '',
    clientSecret: '',
    code: null,
    token: null
};
export default function getAuth(state = initState, action) {
    if (action.type === Actions.GET_AUTH) {
        return Object.assign({}, state, {
            baseUrl: action.baseUrl
        });
    }
    if (action.type === Actions.CREATE_APP_DONE) {
        return Object.assign({}, state, {
            clientId: action.clientId,
            clientSecret: action.clientSecret
        });
    }
    return state;
}
