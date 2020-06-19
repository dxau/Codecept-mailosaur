exports.config = {
  tests: './tests/*.test.js',
  output: './output',
  helpers: {
    Mailosaur: {
      require: '../index',
      serverId: 'opta4rcp',
      key: 'f5WZmMdpEO8EkFz',
    }
  },
  include: {},
  bootstrap: null,
  mocha: {},
  name: 'test',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}