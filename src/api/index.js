import Mastodon from 'mastodon-api';

export function test() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(999);
        }, 5000);
    });
}

export function createApp() {
    const baseUrl = 'https://pawoo.net/';
    let clientId;
    let clientSecret;

    Mastodon.createOAuthApp(baseUrl + '/api/v1/apps', 'testapp', 'read write follow')
        .catch(err => console.error(err))
        .then((res) => {
            clientId = res.client_id;
            clientSecret = res.client_secret;

            return Mastodon.getAuthorizationUrl(clientId, clientSecret, baseUrl);
        })
    .then((url) => {
        console.log('This is the authorization URL. Open it in your browser and authorize with your account!');
        console.log(url);
        return new Promise((resolve) => {
            rl.question('Please enter the code from the website: ', code => {
                resolve(code)
                rl.close()
            })
        })
    })
    .then(code => Mastodon.getAccessToken(clientId, clientSecret, code, baseUrl))
    .catch(err => console.error(err))
    .then(accessToken => {});
}

