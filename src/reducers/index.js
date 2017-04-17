import * as Actions from '../actions';

const initState = {
    baseUrl: 'https://',
    client_id: null,
    client_secret: null,
    token: null
};
export default function getAuth(state = initState, action) {
    console.log(state, action);

    if (action.type === Actions.GET_AUTH) {
        return Object.assign({}, state, {
            baseUrl: action.baseUrl
        });
    }
    return state;
}
