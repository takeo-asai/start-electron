import Mastodon from 'mastodon-api';

const shell = require('electron').shell;

export function test() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(999);
        }, 5000);
    });
}

export function createApp() {
    const baseUrl = 'https://pawoo.net';
    let clientId;
    let clientSecret;

    return Mastodon.createOAuthApp(`${baseUrl}/api/v1/apps`, 'testapp', 'read write follow')
        .catch(err => console.error(err))
        .then((res) => {
            clientId = res.client_id;
            clientSecret = res.client_secret;

            return Mastodon.getAuthorizationUrl(clientId, clientSecret, baseUrl);
        })
    .then((url) => {
        shell.openExternal(url);
//        console.log('api console');
//        console.warn(url, clientId, clientSecret);
        return {
            url,
            clientId,
            clientSecret
        };
    });
    // .then(code => Mastodon.getAccessToken(clientId, clientSecret, code, baseUrl));
}

