import Vue from 'vue'

Vue.use(require('vue-resource'))
Vue.http.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')

new Vue({
  el: 'body'
})
