<template>
  <div class="">
    <Header/>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/partials/Header.vue'

export default {
  name: 'about',
  components: {
    Header
  }
}
</script>
<style scoped>
.about {
  margin-top: 10px;
}
</style>
