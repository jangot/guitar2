module.exports = {

    _modules: {},
    _config: {},
    _tasks: [],
    _vars: {},

    addModule: function(name) {
        this._modules[name] = true;

        return this;
    },
    addConfig: function(module, name, options) {
        this._config[module] = this._config[module] || {};

        this._config[module][name] = options;

        return this;
    },

    addVar: function(name, value) {
        this._vars[name] = value;
        return this;
    },

    createTask: function() {
        this._tasks.push(arguments);

        return this;
    },

    init: function(grunt) {
        var config = this._config;

        for (var name in this._vars) {
            config[name] = this._vars[name];
        }

        grunt.initConfig(config);

        for (var module in this._modules) {
            grunt.loadNpmTasks(module);
        }

        for (var i = 0; i < this._tasks.length; i++) {
            grunt.registerTask.apply(grunt, this._tasks[i]);
        }
    }
}
