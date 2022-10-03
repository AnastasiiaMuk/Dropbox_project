const assert = require('chai').assert;

const GetToken = require('../objects/get_token.js');
const UploadFile = require('../objects/upload.js');
const GetFileMetadata = require('../objects/get_metadata.js');
const DeleteFile = require('../objects/delete.js');

const appKey = '27gyfoo1dx9hvy1';
const appSecret = '8eow345moxpsvbg';
const refreshToken = 'K16K67fhioMAAAAAAAAAAS8C3fxo-SIX5C6PQXa_Xw91445lkKeOVKGoIWic7YCA';
const fileName = '/test.txt';
const content = 'Hello Alex!';
const tagValueFile = 'file';
const tagValueDeleted = 'deleted';

describe('Dropbox API', function () {
    let accessToken;

    it('Test get token', async function () {
        accessToken = await GetToken.getToken(appKey, appSecret, refreshToken);
    });

    it('Upload File', async function () {
        await UploadFile.uploadFile(accessToken, fileName, content);        
    });

    it('Get file metadata after upload file', async function () {
        await GetFileMetadata.getFileMetadataAndVerifyTag(accessToken, fileName, tagValueFile);
    });

    it('Delete file', async function () {
        this.timeout(10000);
        await DeleteFile.deleteFile(accessToken, fileName);
    });

    it('Get file metadata after delete file', async function () {
        await GetFileMetadata.getFileMetadataAndVerifyTag(accessToken, fileName, tagValueDeleted);
    });
});
