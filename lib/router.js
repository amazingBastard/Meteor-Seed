Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.map(function() {
  this.route('home', {
    path: '/'
  });

  this.route('posts', {
    path: '/posts',
    waitOn: function() {
      return Meteor.subscribe('posts');
    },
    data: function() {
      return Meteor.subscribe('posts');
    }
  });

  this.route('postShow', {
    path: '/posts/:_id',
    waitOn: function() {
      return Meteor.subscribe('post', this.params._id);
    },
    data: function() {
      return Posts.findOne(this.params._id);
    }
  });

  this.route('postEdit', {
    path: '/posts/:_id/edit',
    waitOn: function() {
      return Meteor.subscribe('post', this.params._id);
    },
    data: function() {
      return Posts.findOne(this.params._id);
    }
  });

  this.route('dashboard', {
    path: '/admin'
  });

  this.route('postNew', {
    path: '/admin/post'
  });

});

var requireLogin = function(pause) {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render(this.loadingTemplate);
    else
      this.render('accessDenied');
    pause();
  }
}

Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {only: 'dashboard'});