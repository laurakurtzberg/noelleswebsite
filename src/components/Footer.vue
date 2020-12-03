<template>
  <footer>
    <p class="credit-right">Illustrations by <a href="https://icons8.com/illustrations/author/5eb2a7bd01d0360019f124e7">Olha Khomich</a></p>
    <p class="credit-left">Made by Laura Kurtzberg</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
  footer {
    width: calc(100% - 30px);
    font-family: sans-serif;
    font-size: 0.7em;
    position: absolute;
    bottom: 0;
    right: 15px;
    left: 15px;
    color: #0e172c;
  }
  p.credit-right {
    float: right;
  }
  p.credit-left {
    float: left;
  }
</style>
