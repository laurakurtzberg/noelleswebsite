<template>
  <div class="letter-container">
    <div class="letter-icon" v-on:click="open=!open">
      <img
        class="heart-decoration"
        src="heart.png"
      />
      <div class="caret"></div>
    </div>
    <transition name="expand">
      <aside v-if="open">
        <p>Hi Noelle!</p>
        <p>Happy Birthday!</p>
      </aside>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Letter',
  data: () => {
    return {
      open: false
    }
  }
}
</script>

<style>
  .heart-decoration {
    width: 15px;
    position: absolute;
    top: 5px;
    left: 25px;
    z-index: 1000;
  }
  .caret {
    pointer-events: none;
    position: relative;
  }
  .caret:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-top: 30px solid rgba(167, 134, 223, 1);
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
  }
  .caret:after {
    content: '';
    position: absolute;
    left: 2px;
    top: 0;
    border-top: 28px solid #d9d4e7;
    border-left: 28px solid transparent;
    border-right: 28px solid transparent;
  }
  div.letter-container {
    position: absolute;
    top: 12px;
    right: 15px;
  }
  div.letter-icon {
    background: white;
    border: 2px solid rgba(167, 134, 223, 1);
    border-radius: 5px;
    width: 60px;
    height: 45px;
  }

  aside {
    position: absolute;
    right: 0;
    width: 140px;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 10px;
    margin-top: 10px;
  }
  aside p {
    text-align: left;
    line-height: 1em;
  }
  .expand-enter-active, .expand-leave-active {
    transition: opacity .5s;
  }
  .expand-enter, .expand-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
