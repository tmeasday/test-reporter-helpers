Package.describe({
  name: 'test-reporter-helpers',
  version: '0.0.1',
  summary: 'Some helpers to make writing test reporters easier',
  git: 'https://github.com/tmeasday/test-reporter-helpers.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-modules-beta.8');
  api.use('ecmascript');
  api.mainModule('test-reporter-helpers.js');
});
