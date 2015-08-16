App.Modules.seedData = function () {
  var now = new Date();

  App.Collections.Quotes.insert({
    quote: 'This is a quote',
    author: 'Author'
		createdAt: now
  });

};

Meteor.startup(function() {

  if (App.Collections.Quotes.find().count() === 0) {
    App.Modules.seedData();
  }

});
