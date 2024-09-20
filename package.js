Package.describe({
  name: 'mozfet:materialize-icons',
  summary: 'Reactive Materialize Icons with tooltips.',
  version: '2.1.1',
  git: 'https://github.com/mozfet/meteor-autoform-materialize-icons.git'
});

Package.onUse(function(api) {
  api.versionsFrom('3.0');
  api.use([
    'templating',
    'blaze',
    'underscore',
    'msavin:parrot@1.3.0'
  ], 'client');
  api.use('ecmascript');
  api.addFiles([
    'index.js'
  ], 'client');
});
