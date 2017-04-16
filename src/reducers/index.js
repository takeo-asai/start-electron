import * as Actions from '../actions';

export default function testreduce(state = null, action) {
    const { type, error } = action;
    console.log(type, error);

    if (type === Actions.TEST) {
        return {};
    }
}