require.config({
  baseUrl: '../',
  paths: {
    jquery  : '../vendor/jquery/dist/jquery',
    angular : '../vendor/angular/angular',
    animate : '../vendor/angular-animate/angular-animate',
    resource: '../vendor/angular-resource/angular-resource',
    router  : '../vendor/angular-ui-router/release/angular-ui-router',
    app     : '../app/app',
    lazy    : '../app/lazy',
    modules : '../modules',
    lib     : '../lib'
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
    router: ['angular'],
    resource: ['angular']
  },
  deps: ['./bootstrap/init']
});