import * as Actions from '../actions';

export default function testreduce(state = null, action) {
    const { type, error } = action;
    if (type === Actions.TEST) {
        return {};
    }
}
