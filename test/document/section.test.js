var assert = require('assert');

/**
 * @type {Section}
 */
var $section = require(__src + "document/section.js");

describe('/document/section', function()
{
	it('strip @readme from name', function()
	{
		var section = new $section('@readme House', ["This is a test"]);
		assert.equal(section.name, "House");
	});
});