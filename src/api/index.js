export function test() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(999);
        }, 5000);
    });
}