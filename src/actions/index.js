export const TEST = 'TEST';
export const PROMISETEST = 'PROMISETEST';

export function test(value) {
    return {
        type: TEST,
        value: value
    };
}

export function promiseTest() {
    return {
        type: PROMISETEST,
        value: 777
    };
}
