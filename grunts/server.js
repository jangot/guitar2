
module.exports = function(builder) {
    var TASK_NAME = 'server';

    builder
        .addModule('grunt-bg-shell')
        .addModule('grunt-reload')

        .addConfig('bgShell', 'server', {
            cmd: 'killall -9 node \n node server.js',
            bg: true
        })
        .createTask(TASK_NAME, ['bgShell:server']);

    return TASK_NAME;
}