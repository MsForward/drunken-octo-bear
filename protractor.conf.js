exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['tests/e2e/**/*.test.js'],
  capabilities: {
    browserName: 'PhantomJS',
    'phantomjs.binary.path': require('phantomjs').path,
    'phantomjs.ghostdriver.cli.args': [ '--loglevel=DEBUG' ]
  }
}