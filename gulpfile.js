var elixir = require('laravel-elixir'),
    fs     = require('fs'),
    _      = require('underscore');

Elixir.setDefaultsFrom = function (file) {
    let overrides;

    if (fs.existsSync(file)) {
        overrides = JSON.parse(fs.readFileSync(file, 'utf8'));

        _.mixin({
            deepExtend: require('underscore-deep-extend')(_)
        });

        _.deepExtend(this.config, overrides);
    }
};

Elixir.setDefaultsFrom('config.json');

elixir(function(mix) {
    mix.sass('main.scss');
    mix.browserify('requires.js');
    mix.coffee('main.coffee');
});
