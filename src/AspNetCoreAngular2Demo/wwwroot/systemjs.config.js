/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
      paths: {
          'npm:': '/lib-npm/'
      },

      map: {
          'app': 'app',
          '@angular/core': 'npm:core/bundles/core.umd.js',
          '@angular/common': 'npm:common/bundles/common.umd.js',
          '@angular/compiler': 'npm:compiler/bundles/compiler.umd.js',
          '@angular/platform-browser': 'npm:platform-browser/bundles/platform-browser.umd.js',
          '@angular/platform-browser-dynamic': 'npm:platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
          '@angular/http': 'npm:http/bundles/http.umd.js',
          '@angular/http/testing': 'npm:http/bundles/http-testing.umd.js',
          '@angular/router': 'npm:router/bundles/router.umd.js',
          '@angular/forms': 'npm:forms/bundles/forms.umd.js',
          'rxjs': 'npm:',

          'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
      },
      // packages tells the System loader how to load when no filename and/or no extension
      //for this we have to use systemjs-angular-loader.js in Packages
    packages: {
        app: {
            main: './main.js',
            defaultExtension: 'js'
        },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
