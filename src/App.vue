<template>
  <div id="app">
    <router-view />
    <Letter />
    <Footer/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue'
import Letter from './components/Letter.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Letter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Londrina+Shadow&family=Londrina+Solid:wght@300;400&display=swap');

html {
  padding: 0;
  margin: 0;
}
h1 {
  font-family: 'Londrina Shadow', cursive;
  font-weight: bold;
  color: #0e172c;
  font-size: 2.3em;
  letter-spacing: 0.1em;
  padding: 30px;
}
#app {
  font-family: 'Londrina Solid', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
  background: #f9f8fc;
  color: #0e172c;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 4px #fec7d7 solid;
}
</style>
