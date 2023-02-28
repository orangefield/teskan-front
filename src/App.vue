<template>
  <PageHeader/>
  <router-view/> <!-- router로 이동할 수 있는 페이지들을 보여준다 -->
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
