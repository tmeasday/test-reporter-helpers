Package.describe({
  name: 'tmeasday:test-reporter-helpers',
  version: '0.2.1',
  summary: 'Some helpers to make writing test reporters easier',
  git: 'https://github.com/tmeasday/test-reporter-helpers.git',
  documentation: 'README.md',
  testOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-beta.11');
  api.use(['ecmascript', 'underscore', 'jquery'], 'client');
  api.mainModule('test-reporter-helpers.js', 'client');
});
