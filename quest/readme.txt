
HOW to build and run

  1. SRC folder, angular.json,  package.json can be added to original build-based app (rewriting existing files).
  2. npm install should be run (bootstrap and ngrx libraries where added)
  3. ng serve can be run

Unimplemented features

  In ngrx implementation isLoading is added in case loading flights will take time.
  Finaly decided not to use it (should be used for displaying spinner while loading) - not fit current UX design.  