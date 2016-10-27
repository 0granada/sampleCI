
var chai = require('chai');

function Steps(){

  this.Given(/^I have visited "([^"]*)"$/, function (url) {
    // browser.saveScreenshot('./p0.png');
    browser.url(url);
  });

  this.When(/^I write the name "([^"]*)"$/, function (name) {
    // browser.saveScreenshot('./p1.png');
    browser.setValue('input#name', name);
    browser.keys(['Enter']);
  });

  this.When(/^description "([^"]*)"$/, function (description) {
    // browser.saveScreenshot('./p2.png');
    browser.setValue('input#description', description);
    browser.keys(['Enter']);
  });

  this.When(/^press the "([^"]*)" button$/, function (arg1) {
    // browser.saveScreenshot('./p3.png');
    browser.click('.NewItem-button');
    // browser.click('#buttonAdd');
    // browser.element('.NewItem').element('.NewItem-actions').click('.NewItem-button')
  });

  this.Then(/^I see a new card with the name "([^"]*)" and description "([^"]*)"\.$/, function (name, description) {
    // browser.saveScreenshot('./p4.png');
    browser.waitForExist('.Card-container');
    chai.expect(browser.getText('.Card-container h3')).to.equal(name);
    chai.expect(browser.getText('.Card-container p')).to.equal(description);
  });

}

module.exports = Steps;

