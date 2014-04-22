module.exports = function(grunt) {
    var path = require('path');

    grunt.initConfig({
        rootPath: path.resolve('.'),
        publicPath: '<%= rootPath %>/public',
        compilePath: '<%= rootPath %>/compile',

        connect: {
            options: {
                hostname: 'guitar.local',
                middleware: function(connect, options) {
                    return [
                        require('connect-livereload')(),
                        require('grunt-connect-pushstate/lib/utils').pushState(),
                        connect.static(options.base)
                    ];
                }
            },
            development: {
                options: {
                    port: 8009,
                    base: '<%= publicPath %>'
                }
            }
        },
        watch: {
            livereload: {
                // Here we watch the files the sass task will compile to
                // These files are sent to the live reload server after sass compiles to them
                options: {
                    livereload: true
                },
                files: ['<%= compilePath %>/**/*']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['connect', 'watch']);
}
