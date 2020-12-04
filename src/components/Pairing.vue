<template>
<div>
  <router-link class="back-button" tag="button" :to="'/'">
    back
  </router-link>
  <h1>Dinner Coupon Generator</h1>
  <button class="randomize" v-on:click="randomize">randomize</button>
  <div id="box">
    <h4>This Coupon is Valid for 1 Dinner</h4>
    <p class="coupon-text">Made by Laura for Noelle</p>
    <img class="little-pie" src="pie.png" alt="pie of pie" />
    <div class="coupon-contents">
      <p class="label">
        Main Course:
        <input v-if="mainEditing" v-model="main" placeholder="edit me" @keydown.enter="activateMainEditing"/>
        <span v-if="!mainEditing" class="name">{{main}}</span>
      </p>
      <i class="edit-button main" v-on:click="activateMainEditing" title="type in something else">
        <font-awesome-icon icon="edit" />
      </i>
      <p class="label">
        Drink:
        <input v-if="drinkEditing" v-model="drinks[drinkIndex]" placeholder="edit me" @keydown.enter="activateDrinkEditing"/>
        <span v-if="!drinkEditing" class="name">{{drink}}</span>
      </p>
      <i class="edit-button drink" v-on:click="activateDrinkEditing" title="type in something else">
        <font-awesome-icon icon="edit" />
      </i>
    </div>
  </div>
  <div class="gradient-border"></div>
</div>
</template>

<script>
export default {
  name: 'Pairing',
  data: () => {
    return {
      mainEditing: false,
      drinkEditing: false,
      foodIndex: Math.floor(Math.random()*12),
      drinkIndex: Math.floor(Math.random()*10),
      maincourses: ["Thai Curry", "Grilled Cheese", "Baked Cheesy Asparagus", "Potato Gratin", "Pumpkin Pie", "Falafel Pita", "Naan Pizza", "Avocado Kale Salad", "Fresh Tacos", "Spaghetti", "Cranberry Quinoa Bowl", "Matcha Pancakes", "Lentil Soup", "Homemade Poke Bowl"],
      drinks: ["Red Wine", "White Wine", "Custom Cocktail", "Margarita", "Mezcal", "Thai Coffee", "Hot Tea", "Arnold Palmer", "Lemonade", "Fresh Fruit Smoothie", "Sparkling Lemon Water"]
    }
  },
  methods: {
    activateMainEditing: function() {
      this.mainEditing = !this.mainEditing
    },
    activateDrinkEditing: function() {
      this.drinkEditing = !this.drinkEditing
    },
    randomize: function() {
      this.foodIndex = Math.floor(Math.random()*12);
      this.drinkIndex = Math.floor(Math.random()*10);
    }
  }
}
</script>

<style scoped>
button.randomize {
  background: #fec7d7;
  color: #0e172c;
  border-radius: 5px;
  font-weight: bold;
  padding: 5px 7px;
  min-width: 95px;
}
div.coupon-contents {
  margin-top: 30px;
}
i.edit-button {
  cursor: pointer;
  font-weight: normal;
  padding-top: 0;
  margin-top: -40px;
  display: inline-block;
  position: absolute;
  right: 40px;
  transition: opacity 0.3s ease-out;
}

i.edit-button:hover {
  opacity: 0.5;
}

img.little-pie {
  max-width: 60px;
  position: absolute;
  bottom: 15px;
  right: 15px;
}

h4 {
  padding-top: 28px;
  padding-bottom: 0;
  margin-bottom: 10px;
  font-size: 1.3em;
}

p.coupon-text {
  font-weight: 100;
  font-size: 1.1em;
  padding-top: 0;
  margin-top: 0;
}

p.label {
  text-align: left;
  padding-left: 40px;
  line-height: 30px;
}

span.name {
  font-weight: 100;
}

#box {
  width: 450px;
  height: 280px;
  color: white;
  border-width: 4px;
  border-color: pink;
  z-index: 1000;
  background: rgba(217, 212, 231, 0.5);
  color: #0e172c;
  border-radius: 5px;
  margin: auto;
  position: relative;
}

.gradient-border {
  width: 460px;
  height: 290px;
  margin: auto;
  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
  border-radius: calc(2 * 5px);
  animation: animatedgradient 3s ease alternate infinite;
  background-size: 300% 300%;
  position: relative;
  top: -285px;
  z-index: 1;
}


@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
