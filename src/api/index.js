import Mastodon from 'mastodon-api';

const shell = require('electron').shell;

export function createApp(baseUrl) {
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
            clientId,
            clientSecret
        };
    });
}

export function getToken(baseUrl, clientId, clientSecret, code) {
    return Mastodon.getAccessToken(clientId, clientSecret, code, baseUrl);
}
