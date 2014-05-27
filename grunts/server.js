
module.exports = function(builder) {
    var TASK_NAME = 'server';

    builder
        .addModule('grunt-contrib-connect')

        .addConfig('connect', 'options', {
            hostname: 'guitar.local',
            middleware: function(connect, options) {
                return [
                    require('connect-livereload')(),
                    require('grunt-connect-pushstate/lib/utils').pushState(),
                    connect.static(options.base)
                ];
            }
        })
        .addConfig('connect', 'development', {
            options: {
                port: 8009,
                base: '<%= publicPath %>'
            }
        })


        .addConfig('watch', 'livereload', {
            // Here we watch the files the sass task will compile to
            // These files are sent to the live reload server after sass compiles to them
            options: {
                livereload: true
            },
            files: ['<%= publicPath %>/../compile/**/*']
        })

        .createTask(TASK_NAME, ['connect:development'])

    return TASK_NAME;
}