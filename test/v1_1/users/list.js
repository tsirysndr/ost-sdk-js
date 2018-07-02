// Load external packages
const chai = require('chai')
  , assert = chai.assert
;

// Load cache service
const rootPrefix = "../../.."
  , helper = require(rootPrefix + '/test/v1_1/helper')
  , OSTSDK = require(rootPrefix + '/index')
  , ostObj = new OSTSDK({apiEndpoint: helper.OST_KIT_API_ENDPOINT, apiKey: helper.OST_KIT_API_KEY, apiSecret: helper.OST_KIT_API_SECRET})
  , userService = ostObj.services.users
;

describe('services/v1_1/users/list', function () {
  const coreTestCases = require(rootPrefix + "/test/v1_core/users/list");
  coreTestCases.setOSTSDK( ostObj );
  coreTestCases.setHelper( helper );
  coreTestCases.startTests();
});