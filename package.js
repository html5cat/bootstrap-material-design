Package.describe({
  summary: "Google's Material Design based Bootstrap 3 theme.",
  version: "0.1.0",
  // git: "https://github.com/FezVrasta/bootstrap-material-design.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3');
  api.use(['mizzao:bootstrap-3@3.2.0', 'jquery'], 'client');

  api.addFiles([
    // 'bootstrap-material-design/css-compiled/material-wfont.css',
    'bootstrap-material-design/css-compiled/material.css',
    'bootstrap-material-design/css-compiled/ripples.css',
    'bootstrap-material-design/scripts/ripples.js',
    'bootstrap-material-design/scripts/material.js',
    'bootstrap-material-design/icons/icons-material-design.css',
    'bootstrap-material-design/icons/fonts/Material-Design.eot',
    'bootstrap-material-design/icons/fonts/Material-Design.svg',
    'bootstrap-material-design/icons/fonts/Material-Design.ttf',
    'bootstrap-material-design/icons/fonts/Material-Design.woff'
    ], 'client', {bare: true});
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('html5cat:bootstrap-material-design');
  // api.addFiles('html5cat:bootstrap-material-design-tests.js');
});
