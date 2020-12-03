<template>
  <div class="letter-container">
    <div id="letter-icon" v-on:click="open=!open">
      <img
        class="heart-decoration"
        src="heart.png"
      />
      <div class="caret"></div>
    </div>
    <aside v-bind:class="{ expanded: open }" v-on:click="open=!open">
      <p>11/27/2020</p>
      <p>Dear Noelle,</p>
      <p>
        Happy Super Late Birthday!!! I really did write this part on the 27th!
        I hope you like this little corner of the internet that I set aside to
        collect some funny things I made for you! I want you to know that
        you are the sweetest bun I've ever met. Click the complement delivery box
        to read even more true facts about yourself! From me to you - thank you for
        being my girlfriend, and making this world a better place with your existence!
      </p>
      <p>-Laura</p>
    </aside>
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
  div#letter-icon {
    background: white;
    border: 2px solid rgba(167, 134, 223, 1);
    border-radius: 5px;
    width: 62px;
    height: 45px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;
    transition: all .4s;
  }
  div#letter-icon:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 24px 0px, rgba(167, 134, 223, 1) 0px 0px 0px 1px;
    opacity: 70%;
  }
  aside {
    position: absolute;
    background: white;
    right: 0;
    height: 0px;
    width: 0px;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 0px;
    border-width: 0px;
    margin-top: 10px;
    transition: all 2s;
    overflow: hidden;
  }
  .expanded {
    width: 340px;
    height: 340px;
    padding: 10px;
    border: 1px solid grey;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;
  }
  aside p {
    text-align: left;
    font-weight: 300;
  }
</style>
