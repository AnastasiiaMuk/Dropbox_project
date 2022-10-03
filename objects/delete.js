const axios = require('axios').default;
const assert = require('chai').assert;

class DeleteFile {

    async deleteFile(accessToken, fileName) {
        const deleteFileResponse = await axios.post('https://api.dropboxapi.com/2/files/delete_v2',
        JSON.stringify({"path": fileName}),
        {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
             }
        });
        assert.equal(deleteFileResponse.status, 200, 'Delete fail');
    }
}

module.exports = new DeleteFile();
