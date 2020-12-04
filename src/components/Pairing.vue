<template>
  <div>
    <router-link class="back-button" tag="button" :to="'/'">
      back
    </router-link>
    <h1>Dinner Coupon Generator</h1>
    <button>randomize</button>
    <div id="box">
      <h4>This Coupon is Valid for 1 Dinner</h4>
      <p class="coupon-text">Made by Laura for Noelle</p>
    </div>
    <div class="gradient-border"></div>
  </div>
</template>

<script>
export default {
  name: 'Pairing'
}
</script>

<style>
h4 {
  padding-top: 30px;
  padding-bottom: 0;
  margin-bottom: 10px;
  font-size: 1.2em;
}
p.coupon-text {
  font-weight: 100;
  padding-top: 0;
  margin-top: 0;
}
#box {
  width: 400px;
  height: 280px;
  color: white;
  border-width: 4px;
  border-color: pink;
  z-index: 1000;
  background: #d9d4e7;
  color: #0e172c;
  border-radius: 5px;
  margin: auto;
  position: relative;
}

.gradient-border {
  width: 410px;
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
