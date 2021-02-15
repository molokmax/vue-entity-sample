<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="run2">Execute sample</button>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener">pwa</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import DataManager from '../persist/DataManager'
import CacheManager from '../persist/local-api/CacheManager'
import Sample from '../persist/models/Sample'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    run2() {
      debugger
      let dataManager = new DataManager()
      let rec = new Sample()
      rec.name = 'test1'
      rec.prefix = 'sample prefix 1'
      rec.field = 'zxc'
      dataManager.add('samples', rec).then(res => {
        debugger
        console.log(res)
      })

      dataManager.getById('samples', 2).then(rec => {
        rec.prefix = 'qwerty'
        dataManager.update('samples', rec).then(result => {
          console.log('result:', result)
        })
      })
    },
    run() {
      debugger
      let cache = new CacheManager()
      let rec = new Sample()
      rec.name = 'test1'
      rec.prefix = 'sample prefix 1'
      rec.field = 'zxc'
      cache.add('samples', rec).then(res => {
        debugger
        console.log(res)
      })

      cache.getById('samples', 3).then(rec => {
        rec.prefix = 'qwerty'
        cache.update('samples', rec).then(result => {
          console.log('result:', result)
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
