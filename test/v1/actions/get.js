// Load external packages
const chai    = require('chai')
  , assert    = chai.assert
  , BigNumber = require('bignumber.js')
;

// Load action service
const rootPrefix    = "../../.."
  , helper          = require(rootPrefix + '/test/v1/helper')
  , OSTSDK          = require(rootPrefix + '/index')
  , sdkConfig       = {
      apiEndpoint : helper.OST_KIT_API_ENDPOINT
      , apiKey    : helper.OST_KIT_API_KEY
      , apiSecret : helper.OST_KIT_API_SECRET
    }
  , ostObj          = new OSTSDK( sdkConfig )
;

describe('services/v1/actions/get', function () {
  const coreTestCases = require(rootPrefix + "/test/v1_core/actions/get");
  coreTestCases.setOSTSDK( ostObj );
  coreTestCases.setHelper( helper );
  coreTestCases.startTests();
});
