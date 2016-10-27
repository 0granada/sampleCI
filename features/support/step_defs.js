
var chai = require('chai');

function Steps(){

  this.Given(/^I have visited "([^"]*)"$/, function (url) {
    browser.url(url);
  });

  this.When(/^I write the name "([^"]*)"$/, function (name) {
    browser.setValue('input#name', name);
  });

  this.When(/^description "([^"]*)"$/, function (description) {
    browser.setValue('input#description', description);
    browser.keys([' ']);
  });

  this.When(/^press the "([^"]*)" button$/, function (arg1) {
    browser.click('.NewItem-button');
    browser.waitForExist('.Card-container');
  });

  this.Then(/^I see a new card with the name "([^"]*)" and description "([^"]*)"\.$/, function (name, description) {
    chai.expect(browser.getText('.Card-container h3')).to.equal(name);
    chai.expect(browser.getText('.Card-container p')).to.equal(description);
  });

}

module.exports = Steps;

