// This is the only file where globals should be declared.
// We do this, so we can have all other files in strict mode.

// globals App: true

App = {
  Constants: {},
  // Reusable modules
  Modules: {},
  // Meteor Mongo Collections
  Collections: {},
  // Domain specific logic.
  Services: {},
  Subscriptions: {},
  API: {}
};

var global = this;
global.App = App;
