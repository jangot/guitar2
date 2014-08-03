var path = require('path');
var builder = require('./task');

module.exports = function(grunt) {
    var serverTask = require('./grunts/server')(builder);
    var viewTask = require('./grunts/view')(builder);

    builder
        .addVar('rootPath', path.resolve('.'))
        .addVar('publicPath', '<%= rootPath %>/public')
        .addVar('compilePath', '<%= publicPath %>/compile')

        .addModule('grunt-contrib-watch')

        .addConfig('watch', 'view', {
            files: ['<%= publicPath %>/**/*.styl'],
            tasks: [viewTask]
        })
        .addConfig('watch', 'server', {
            files: ['<%= rootPath %>/server/**/*.js'],
            tasks: [serverTask]
        })

        .createTask('default', [serverTask, viewTask, 'watch:view', 'watch:server'])
        .createTask('build', [viewTask])
        .init(grunt);
}
