const elixir = require('laravel-elixir');

require('laravel-elixir-vue');

(file => {
  let fs = require('fs'),
      _  = require('underscore')

  if (fs.existsSync(file)) {
    _.mixin({deepExtend: require('underscore-deep-extend')(_)})
    _.deepExtend(elixir.config, JSON.parse(fs.readFileSync(file, 'utf8')))
  }
})('config.json')

elixir(mix => {
  mix.sass('bootstrap.scss')
     .webpack('bootstrap.js')
     .sass('app.scss')
     .webpack('app.js')
})
