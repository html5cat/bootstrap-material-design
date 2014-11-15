Package.describe({
  summary: "Google's Material Design based Bootstrap 3 theme.",
  version: "0.1.4",
  name: 'html5cat:bootstrap-material-design',
  git: 'https://github.com/html5cat/bootstrap-material-design.git'
  // git: "https://github.com/FezVrasta/bootstrap-material-design.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3');
  api.use(['mizzao:bootstrap-3', 'jquery'], 'client');

  api.addFiles([
    'bootstrap-material-design/dist/css/material.css',
    'bootstrap-material-design/dist/css/material-wfont.css',
    // 'bootstrap-material-design/dist/css/ripples.min.css',
    'bootstrap-material-design/dist/js/material.js',
    // 'bootstrap-material-design/dist/js/ripples.js',
    'bootstrap-material-design/dist/fonts/Material-Design-Icons.svg',
    'bootstrap-material-design/dist/fonts/Material-Design-Icons.woff',
    'bootstrap-material-design/dist/fonts/Material-Design-Icons.eot',
    'bootstrap-material-design/dist/fonts/Material-Design-Icons.ttf'
    ], 'client', {bare: true});
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('html5cat:bootstrap-material-design');
  // api.addFiles('html5cat:bootstrap-material-design-tests.js');
});
