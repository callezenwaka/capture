<template>
  <div class="header">
    <ul class="nav_menu">
        <h3 class="logo">&hellip;&vellip;&hellip;</h3>
        <li class="nav_item"><router-link class="nav_link" :to="{ name: 'home' }">Home</router-link></li>
        <li class="nav_item"><router-link class="nav_link" :to="{ name: 'about' }">About us</router-link></li>
        <li class="nav_item"><router-link class="nav_link" :to="{ name: 'capture' }">Capture</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
  }
}
</script>
<style>
h1,h2,h3,h4,h5,h6,ul,li,p,hr, div, header, footer {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #70A686;
  /* color: rgba(255, 255, 255, 0.9); */
}
li {
  list-style-type: none;
}
.logo {
    margin-right: 20%;
}
.header {
    /* background-color: #1b1c1d; */
    background-color: #063C1C;
    color: rgba(255, 255, 255, 0.9);
    min-height: 45px;
}
.container {
	display: grid;
    grid-template-columns: 1fr;
    /*grid-template-rows: 1fr auto auto;*/
    grid-gap: 0.5em;
	margin: 0;
	padding: 0;
	min-height:100%;
	grid-template-areas:
	"header"
    "page_content"
    "sidebar"
    "footer";
}
.header {
    grid-area: header;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "";
    padding: 0 10%;
}
.nav_menu {
	display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    padding: 10px;
}
.nav_link:hover {
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  color: rgba(255, 255, 255, 0.5);
  /* font-weight: bolder */
  /* font-size: 1.1em; */
}
.nav_link {
  color: rgba(255, 255, 255, 0.9);
}
</style>