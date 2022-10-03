const axios = require('axios').default;
const assert = require('chai').assert;

class GetToken {

    async getToken(appKey, appSecret, refreshToken) {
        const authorization = Buffer.from(`${appKey}:${appSecret}`).toString('base64');
        const getTokenResponse = await axios.post('https://api.dropbox.com/oauth2/token', 
            `grant_type=refresh_token&refresh_token=${refreshToken}`,
            {
                headers: {
                    'Authorization': `Basic ${authorization}`, 
                    'Content-Type': 'application/x-www-form-urlencoded' 
                }
            });
        assert.equal(getTokenResponse.status, 200, 'Get Access Token fail');
        return getTokenResponse.data.access_token;        
    }
}

module.exports = new GetToken();
