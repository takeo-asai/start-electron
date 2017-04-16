export const TEST = 'TEST';

export function test(action) {
    return {
        type: TEST,
        value: 777,
    };
}