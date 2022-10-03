const axios = require('axios').default;
const assert = require('chai').assert;

class UploadFile {

    async uploadFile(accessToken, fileName, content) {
        const uploadFileResponse = await axios.post('https://content.dropboxapi.com/2/files/upload', content, 
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/octet-stream',
                    'Dropbox-API-Arg': `{"autorename":false,"mode":"add","mute":false,"path":"${fileName}","strict_conflict":false}`
                }
            });
        assert.equal(uploadFileResponse.status, 200, 'Upload fail');    
    }
}

module.exports = new UploadFile();
