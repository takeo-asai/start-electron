import * as Actions from '../actions';

const initState = {
    baseUrl: 'https://',
    clientId: '',
    clientSecret: '',
    token: ''
};
export default function getAuth(state = initState, action) {
    if (action.type === Actions.CREATE_APP_DONE) {
        return Object.assign({}, state, {
            clientId: action.clientId,
            clientSecret: action.clientSecret
        });
    }
    if (action.type === Actions.GET_TOKEN_DONE) {
        return Object.assign({}, state, {
            token: action.token
        });
    }
    return state;
}
