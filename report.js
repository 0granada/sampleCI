
var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonFile: './project_output.json',
    output: './report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true
};

reporter.generate(options);

