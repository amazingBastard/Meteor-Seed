# Meteor Seed

A starter kit for Meteor with folder structure and pre-added packages.

**Note: Still a work in progress.**

* [Roadmap](#roadmap)
* [How to use](#how-to-use)
  * [Requirements](#requirements)
  * [Installation](#installation)
  * [Deployments](#deployments)
* [Structure](#structure)
  * [Packages used](#packages-used)
  * [Folder structure](#folder-structure)
* [Attributions](#attributions)
* [License](#license)

## Roadmap

* Add tests
* Setup build environment

## How to use

### Requirements

Make sure [Meteor is installed and up to date](https://www.meteor.com/install) or run:

```
curl https://install.meteor.com/ | sh
```

### Installation

```
git clone git@github.com:amazingBastard/Meteor-Seed.git
cd Meteor-Seed
meteor
```

### Deployments

It is highly recommended to use [Meteor Up](https://github.com/arunoda/meteor-up) for easy deployments.
Have a look at the repository for more information.

There are other ways to deploy to your server besides Meteor Up. Here is a [step by step guide from Digital Ocean](http://devo.ps/blog/deploy-your-meteor-apps-on-digital-ocean-in-5-minutes/).

## Structure

### Packages used

* Meteor Core
  * [meteor-platform](http://github.com/meteor/meteor/tree/devel/packages/meteor-platform)
* Collections
  * [dburles:collection-helpers](http://github.com/dburles/meteor-collection-helpers/)
* UI and UX
  * [fastclick](http://github.com/meteor/meteor/tree/devel/packages/fastclick)
  * [fortawesome:fontawesome](http://github.com/MeteorPackaging/Font-Awesome)
  * [natestrauser:animate-css](http://github.com/nate-strauser/meteor-animate-css)
* Development
  * [flemay:less-autoprefixer](http://github.com/flemay/less-autoprefixer)
  * [momentjs:moment](http://github.com/moment/moment/)
  * [msavin:mongol](http://github.com/msavin/Mongol)

The "insecure" and "autopublish" packages are removed by default (they make your app vulnerable).

### Folder structure

```
app/                # Application folder
  client/             # Client folder
    compatibility/      # Libraries which create a global variable
    config/             # Configuration files (on the client)
    lib/                # Library files that get executed first
    startup/            # Javascript files on Meteor.startup()
    stylesheets         # LESS files
    templates/          # Contains all templates
      layouts/            # Router layouts
      views/              # All the views
      modules/            # UI elements and components (i.e. forms, actions, etc...)
        common/             # Common components (i.e. header, footer)
        elements/           # Re-usable components
  collections/        # Collection files, for each Meteor.Collection
  packages/           # Packages folder (custom meteor packages, npm)
  private/            # Private files
  public/             # Public files
  router/             # All routes
  server/             # Server folder
    fixtures/           # Meteor.Collection fixtures defined
    lib/                # Server side library folder
    publications/       # Collection publications
    startup/            # On server startup
  tests/              # All tests
    client/             # client tests
      integration/        # integration tests
      unit/               # unit tests
    server/             # server tests
      integration/        # integration tests
      unit/               # unit tests
environments/       # Environments folder
  build/              # testing environment
  local/              # local environment
  production/         # production environment

```

## Attributions

The app structure is my own deviation from the structure used in [Meteor Boilerplate](https://github.com/matteodem/meteor-boilerplate)/

Separating the app and environments was something I learned from [Josh Owens](https://github.com/queso) and [Sam Hattoum](https://github.com/samhatoum).

## License

This project has an MIT License, see the LICENSE.txt for more information.
