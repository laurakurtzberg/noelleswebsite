<template>
  <div class="homepage-container">
    <h1>{{ msg }}</h1>
    <div class="bookmarks">
    <router-link
      v-for="(bookmark, index) in Bookmarks"
      :key="bookmark.name + index"
      class="link"
      tag="div"
      :to="bookmark.linkTo"
    >
      <div class="bookmark">
        <img :src="bookmark.imageURL" :alt="bookmark.imageALT" />
        <h3>{{bookmark.name}}</h3>
      </div>
    </router-link>
    </div>
    <img class="bottom-image" src="../../public/cute-boat-animals.png" alt="cute animals in a boat" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => ({
    Bookmarks: [
      {
        name: "Photobook",
        imageURL: "flower.png",
        imageALT: "cute flower",
        linkTo: "/photobook"
      },
      {
        name: "Compliment Delivery Box",
        imageURL: "flower.png",
        imageALT: "cute flower",
        linkTo: "/compliments"
      },
      {
        name: "My Mixtape for You",
        imageURL: "flower.png",
        imageALT: "cute flower",
        linkTo: "/mixtape"
      },
      {
        name: "Adulting Game",
        imageURL: "flower.png",
        imageALT: "cute flower",
        linkTo: "/adulting"
      },
      {
        name: "Food and Drink Pairing",
        imageURL: "pie.png",
        imageALT: "pie",
        linkTo: "/pairing"
      }
    ]
  }),
}
</script>

<!-- "scoped" attribute limits CSS to this component only -->
<style scoped>
  .bottom-image {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-55%);
    width: 400px;
  }
  .homepage-container {
    padding: 0;
    margin: 0;
    width: 100%;
  }
  .bookmark {
    color: #0e172c;
    height: 100%;
    background: #d9d4e7;
    border-radius: 5px;
    padding: 30px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;
  }
  .bookmark img {
    max-width: 75px;
    max-height: 75px;
    position: relative;
    padding-bottom: 20px;
  }
  .bookmarks {
    width: 90%;
    height: 70vh;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    margin: auto;
  }
  h3 {
    letter-spacing: -0.2em;
    writing-mode: vertical-rl;
    text-orientation: upright;
    text-transform: uppercase;
    text-align: center;
  }
  a {
    color: #42b983;
  }
</style>
