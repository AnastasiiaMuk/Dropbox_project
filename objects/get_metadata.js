const axios = require('axios').default;
const assert = require('chai').assert;

class GetFileMetadata {

    async getFileMetadata(accessToken, fileName) {
        const getFileMetadataResponse = await axios.post('https://api.dropboxapi.com/2/files/get_metadata', 
            JSON.stringify({
                "include_deleted": true,
                "include_has_explicit_shared_members": true,
                "include_media_info": true,
                "path": fileName
            }),
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                }
            });
        assert.equal(getFileMetadataResponse.status, 200, 'Get file metadata fail');
        return getFileMetadataResponse.data;
    }

    async getFileMetadataAndVerifyTag(accessToken, fileName, expected) {
        const metadata = await this.getFileMetadata(accessToken, fileName);
        assert.equal(metadata['.tag'], expected, 'Wrong metadata tag value');
    }
}

module.exports = new GetFileMetadata();
