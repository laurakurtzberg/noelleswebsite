<template>
  <div class="letter-container">
    <div class="letter-icon">
    </div>
    <aside>
      <p>Hi Noelle!</p>
      <p>Happy Birthday!</p>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'Letter'
}
</script>

<style>
  div.letter-container {
    position: absolute;
    top: 12px;
    right: 15px;
  }
  aside {
    display: none;
  }
  div.letter-icon {
    background: white;
    border: 2px solid grey;
    border-radius: 5px;
    width: 60px;
    height: 45px;
  }
</style>
