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
        <div class="img-container">
          <img :src="bookmark.imageURL" :alt="bookmark.imageALT" />
        </div>
        <h3>{{bookmark.name}}</h3>
      </div>
    </router-link>
    </div>
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
        imageURL: "present.png",
        imageALT: "present",
        linkTo: "/compliments"
      },
      {
        name: "My Mixtape for You",
        imageURL: "stereo.png",
        imageALT: "boom box",
        linkTo: "/spotify"
      },
      {
        name: "Adulting Game",
        imageURL: "celebrate.png",
        imageALT: "adulting character",
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
  .bookmark:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 24px 0px, rgba(167, 134, 223, 1) 0px 0px 0px 1px;
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

  @media only screen and (max-width: 1000px) {
    .bookmarks {
      flex-direction: column;
    }
    h3 {
      writing-mode: horizontal-tb;
      letter-spacing: 0em;
    }
    .bookmark {
      height: 70px;
    }
    .bookmark img {
      padding-bottom: 0px;
      position: static;
      float: left;
    }
  }
</style>
