==================================================================================================================
## FeedHenry 3 Studio
### Ionic Client-side Template 
==================================================================================================================

This repo is basic Ionic / AngularJS Hybrid client side template for projects developed on the FeedHenry 3 Studio.
Visit [FeedHenry](http://www.feedhenry.com) Cloud Platform for more information on developing HTML5 apps with the 
FeedHenry Studio.

### Usage

====
+ **$ sudo npm install -g cordova ionic** 
    + //install Ionic globally
+ **sudo npm install**                                 
    + //install dependecies
+ **ionic platform add [PLATFORM]**                         
    + //add platform (Android and iOS is already included)
+ **ionic emulate [PLATFORM] or ionic run [PLATFORM]**    
    + //emulate on desktop/laptop, or run it on device

====

### Package Contents
+ **app** - Contains all client side JS files .
    + **modules** - Directory containing reuseable Angular modules.
        + **cloud.js** - Reuseable Service module wrapping the `$fh.cloud` API call.
    + **app.js** - Client-side app entry point.
    + **controllers.js** - Blank script ready to create all client-side controllers.
    + **directives.js** - Blank script ready to create all custom client-side directives.
    + **services.js** - Blank script ready to create all custom client-side services.
    + **filters.js** - Blank script ready to create all custom client-side filters.
+ **css** - Directory containing template style sheets and dependencies.
+ **lib** - Directory containing templates JS dependencies library.
    + **angular-route** - Directory containing `ngRoute` module.
        + **angular-route.js** - Uncompressed AngularJS module for `ngRoute` dependency. 
        + **angular-route.min.js** - Compressed AngularJS module for `ngRoute` dependency.
    + **angular-resource** - Directory containing `ngResource` module.
        + **angular-resource.js** - Uncompressed AngularJS module for `ngResource` dependency.
        + **angular-resource.min.js** - Compressed AngularJS module for `ngResource` dependency.
+ **views** - Directory containing templates views/partcials.
    + **example.html** - templates main view/partial.
+ **README.md** - Repo contents.
