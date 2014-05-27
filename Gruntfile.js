var path = require('path');
var builder = require('./task');

module.exports = function(grunt) {
    var serverTask = require('./grunts/server')(builder);
    var viewTask = require('./grunts/view')(builder);

    builder
        .addModule('grunt-contrib-watch')

        .addVar('rootPath', path.resolve('.'))
        .addVar('publicPath', '<%= rootPath %>/public')
        .addVar('compilePath', '<%= publicPath %>/compile')

        .createTask('default', [serverTask, viewTask, 'watch'])
        .createTask('build', [viewTask])
        .init(grunt);
}
