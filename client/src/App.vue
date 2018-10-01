<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/capture">Capture</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #011107;
  // color: #2c3e50;
  margin: 0px;
}
.page_button {
  padding: 5px;
  font-size: 1em;
  font-weight: bold;
  font-style: normal;
  cursor: pointer;
  text-align: center;
  background: #175932;
  color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.9);
}
.page_button:hover {
  color: rgba(255, 255, 255, 0.5);
}
.scotch-rule:first-child {
  margin: 0 0 6px;
}
.scotch-rule {
  border-left: none;
  border-right: none;
}
.scotch-rule {
  box-sizing: content-box;
  content: '';
  display: block;
  border-top: 2px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  height: 1px;
  margin: 15px 0;
  background-color: #fff;
  margin-top: 12px;
  margin-bottom: 12px;
}
// .router-link-exact-active {
// color: #42b983;
// }
</style>
