module.exports = function(grunt) {
    var path = require('path');

    grunt.initConfig({
        
        rootPath: path.resolve('.'),
        publicPath: '<%= rootPath %>/public',
        compilePath: '<%= publicPath %>/compile',

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
        stylus: {
            options: {
                use: [
                    function() {
                        return require('autoprefixer-stylus')("ff >= 20", "chrome >= 20", "safari >= 6", "ios >= 6", "android >= 4", "opera >= 12.1", "ie >= 10");
                    }
                ],
                import: [
                    '<%= publicPath %>/jShop/styles/import/variables.styl',
                    '<%= publicPath %>/jShop/styles/import/functions.styl',
                    '<%= publicPath %>/jShop/styles/import/mixins.styl'
                ],
                urlfunc: function() {
                    console.log(11111111);
                    console.log(arguments);
                }
            },

            compile: {
                files: {
                    '<%= compilePath %>/all.css': [
                        '<%= publicPath %>/jShop/styles/start.styl',
                        '<%= publicPath %>/jShop/**/style.styl',
                        '<%= publicPath %>/jShop/styles/end.styl'
                    ]
                }
            }
        },
        watch: {
            stylus: {
                files: '<%= publicPath %>/**/*.styl',
                tasks: 'stylus'
            },
            livereload: {
                // Here we watch the files the sass task will compile to
                // These files are sent to the live reload server after sass compiles to them
                options: {
                    livereload: true
                },
                files: ['<%= publicPath %>/../compile/**/*']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['connect', 'watch']);
}
