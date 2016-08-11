/**
* Environnement de travail avec GULP et Browser Sync
*/
var gulp = require('gulp');
var browserSync = require('browser-sync');

var gulp        = require('gulp');
var browserSync = require('browser-sync');

// Browser-sync task, only cares about compiled CSS
gulp.task('browser-sync', function() {
   // confiurer mon serveur
    browserSync({
        port: 3000, //port de connexion
        server: { // server
            baseDir: "./", //base
            index: "index3.html" //fichier a chargé
        }
    });
});

// tache par default: lancement de la tache browser sync
gulp.task('default', ['browser-sync'], function () {
// watch
    gulp.watch(["index3.html", "main3.js", "css/*.css"]).on('change', browserSync.reload);
});
