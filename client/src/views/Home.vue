<template>
  <div class="">
    <Header/>
    <div class="home">
      <h1>Welcome to Your Vue.js App"</h1></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/partials/Header.vue'

export default {
  name: 'home',
  components: {
    Header
  }
}
</script>
<style scoped>
.home {
  margin-top: 10px;
}
</style>
