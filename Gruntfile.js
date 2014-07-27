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

        .addConfig('watch', 'common', {
            files: ['<%= rootPath %>/server/**/*.js', '<%= publicPath %>/**/*.styl'],
            tasks: [serverTask, viewTask]
        })

        .createTask('default', [serverTask, viewTask, 'watch:common'])
        .createTask('build', [viewTask])
        .init(grunt);
}
