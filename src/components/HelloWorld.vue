<template>
  <div class="homepage-container">
    <h1>{{ msg }}</h1>
    <div class="bookmarks">
      <h3>Photobook</h3>
      <h3>Compliment Delivery Box</h3>
      <h3>My Mixtape for You</h3>
      <h3>Adulting Game</h3>
      <h3>Food and Drink Pairing</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bookmarks {
    width: 90%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
  }
  h3 {
    height: 100%;
    background: pink;
    writing-mode: vertical-rl;
    text-orientation: upright;
    margin: 30px;
    text-transform: uppercase;
    text-align: center;
    line-height: 15;
  }
  a {
    color: #42b983;
  }
</style>
