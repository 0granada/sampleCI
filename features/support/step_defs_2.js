
var chai = require('chai');

function Steps(){

  this.Then(/^I see a new card with "([^"]*)" as its border color\.$/, function (color) {
    var res = browser.execute(function() {
        var color = document.defaultView.getComputedStyle(document.querySelector('.Card-container')).borderColor;
        return color;
    })
    chai.expect(res.value).to.equal(color);
  });

}

module.exports = Steps;

