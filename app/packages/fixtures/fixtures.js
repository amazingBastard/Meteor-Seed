Meteor.methods({

  'resetFixtures': function () {
    App.Collections.Quotes.remove({});
  },

  'seedData': App.Modules.seedData,

  'fixturesCreate': function(fixtures) {
    quotes = [].concat(fixtures);

    for (var i = 0; i < quotes.length; i++) {
      App.Collections.Quotes.insert(fixtures[i]);
    }
  }

});
