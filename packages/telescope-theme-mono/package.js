Package.describe({summary: "Telescope Mono theme"});

Package.onUse(function (api) {

  api.use([
    'telescope-lib', 
    'telescope-base',
    'jquery'
    ], ['client', 'server']);

  api.add_files([
    'lib/client/js/main.js',
    'lib/mono.js',
    ], ['client', 'server']);

  api.add_files([
    'lib/client/css/style.css',
    ], ['client']);
  
});
