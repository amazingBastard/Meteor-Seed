Package.describe({
  name: 'app:fixtures',
  version: '0.0.1',
  summary: 'Defines app fixtures and seed data',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('seed_data.js', 'server');
  api.addFiles('fixtures.js', 'server');
});
