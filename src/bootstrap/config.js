require.config({
  baseUrl: '../',
  paths: {
    jquery  : '../vendor/jquery/dist/jquery',
    angular : '../vendor/angular/angular',
    animate : '../vendor/angular-animate/angular-animate',
    router  : '../vendor/angular-ui-router/release/angular-ui-router',
    app     : '../app/app',
    lazy    : '../app/lazy',
    modules : '../modules'
  },
  shim: {
    jquery: {
      exports: '$'
    },
    angular: {
      exports: 'angular',
      deps: ['jquery']
    },
    animate: ['angular'],
    router: ['angular']
  },
  deps: ['./bootstrap/init']
});