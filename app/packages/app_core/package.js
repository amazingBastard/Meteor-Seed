Package.describe({
  name: 'app:core',
  version: '0.0.0',
  summary: 'Defines the global namespaces and the application configuration.'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.export('App');
  api.addFiles('app.js');
});
