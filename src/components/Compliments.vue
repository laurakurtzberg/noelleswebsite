<template>
<div>
  <router-link class="back-button" tag="button" :to="'/'">
    back
  </router-link>
  <h1>Compliment Delivery Box</h1>
  <div class="compliment" v-on:click="shake" v-bind:class="{step3: isOpening}">
    <p>Your {{two[randomIndex[0]]}} like {{one[randomIndex[1]]}} {{three[randomIndex[2]]}} {{four[randomIndex[3]]}}.</p>
  </div>
  <div class="giftbox" v-on:click="shake" v-bind:class="{step1: isShaking, step2: isOpening}">
    <div class="cover">
      <div></div>
    </div>
    <div class="box">
      <div></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Compliments',
  data: () => {
    return {
      isShaking: false,
      isOpening: false,
      randomIndex: [1,2,3,0,2],
      one: ['sunshine', 'the softest feathers', 'a shining gemstone', 'music', 'the smell of nutmeg', 'gentle rain', 'magic', 'a dancer'],
      two: ['smile is', 'eyes are', 'kiss is', 'eyelashes are', 'shoulders are', 'hands are', 'lips are', 'hair is'],
      three: ['kissing', 'hugging', 'shining on', 'warming up', 'soothing', 'sprinkling joy on', 'blessing', 'smiling on'],
      four: ['the ocean waves', 'a honeybee making honey', 'clouds in the shy', 'a delicious passionfruit', 'all the lovers in the world', 'two bunnies cavorting', 'everyone around you', 'a forest canopy']
    }
  },
  methods: {
    shake: function() {
      this.randomIndex = [Math.floor(Math.random()*7), Math.floor(Math.random()*7), Math.floor(Math.random()*7), Math.floor(Math.random()*7)];
      console.log(this.two[this.randomIndex[0]]);
      this.isOpening = false;
      this.isClosed = false;
      this.isShaking = true;
      setTimeout(() => {this.isShaking = false;}, 1500);
      setTimeout(() => {this.isOpening = true;}, 1500);
    }
  }
}
</script>

<style>
.back-button {
  z-index: 1000;
  cursor: pointer;
  position: absolute;
  top: 12px;
  left: 15px;
  background: #fec7d7;
  color: #0e172c;
  border-radius: 5px;
  font-weight: bold;
  padding: 5px 7px;
  min-width: 80px;
}

.compliment {
  transform: translateY(0) scale(0.7);
  opacity: 0;
  position: absolute;
  top: 500px;
  left: calc(50% - 180px);
  width: 330px;
  background-image: url('../assets/cloud.png');
  background-size: cover;
  background-position: top;
  height: 250px;
  padding: 10px;
  margin: auto;
  text-align: center;
}

.compliment p {
  font-family: 'Satisfy', cursive;
  max-width: 70%;
  position: absolute;
  top: 42%;
  left: calc(50% - 35%);
  font-size: 1.1em;
  margin-top: 0px;
}

.close-button:hover {
  opacity:
}

.giftbox {
	width: 300px;
	height: 220px;
	position: absolute;
	top: 600px;
	left: 50%;
	margin-left: -140px;
	z-index: 10;
	cursor: pointer;
}

.giftbox::after {
	content: 'click me!';
	position: absolute;
	color: #fff;
	bottom: 0;
	left: 0;
	width: 90%;
	text-align: center;
	font-size: 24px;
	z-index: 1000;
	transform: rotate(-20deg);
	transform-origin: 0 0;
}

.giftbox > div {
	background: #fec7d7;
	position: absolute;
}

.giftbox .cover {
	top: 0;
	left: 0;
	height: 25%;
	width: 90%;
	z-index: 2;
}

.giftbox .box {
	bottom: 0;
	height: 80%;
  width: 80%;
	left: 5%;
	right: 5%;
	z-index: 1;
}

.giftbox > div::after,
.giftbox > div::before {
	content: '';
	position: absolute;
	top: 0;
}

/* ribbon */
.giftbox > div::before {
	background: rgba(167, 134, 223, 1);
	width: 50px;
	left: 50%;
	height: 100%;
  z-index: -1;
	transform: translateX(-50%);
}

/* shadow */
.giftbox .box div {
  z-index: 10000;
	background: rgba(0,0,0,0.1);
	left: 0;
	height: 30px;
	width: 100%;
}

.giftbox .cover div {
	position: absolute;
	height: 60px;
	width: 60px;
	bottom: 100%;
	left: 50%;
	margin-left: -30px;
}

.giftbox .cover div::before,
.giftbox .cover div::after {
	position: absolute;
  left: 5px;
  bottom: 0;
	width: 90%;
	height: 80%;
	content: '';
	background: transparent;
	border-radius: 30px;
	box-shadow: inset 0 0 0 14px rgba(167, 134, 223, 1);
}

.giftbox .cover div::before {
	transform: translateX(-45%) skewY(40deg);
}

.giftbox .cover div::after {
	transform: translateX(45%) skewY(-40deg);
}

@keyframes wobble {
	25% { transform: rotate(4deg); }
	75% { transform: rotate(-2deg); }
}

@keyframes openBox {
  0% { transform: rotate(0deg); }
	50% { transform: rotate(45deg); }
  100% { transform: rotate(0deg); }
}


@keyframes complimentUp {
  0% {
    transform: translateY(0) scale(0.7);
    opacity: 0;
  }
  100% {
    transform: translateY(-300px) scale(1);
    opacity: 1;
  }
}

.step1.giftbox {
	animation: wobble 0.5s linear infinite forwards;
}

.step1.giftbox .cover,
.step1.giftbox .cover div,
.step1.giftbox .box div {
	animation: wobble 0.5s 0.1s linear infinite forwards;
}

.step2.giftbox .cover {
  transform-origin: 90% 45%;
	animation: openBox 3s ease-out forwards;
}

.step3 {
  animation: complimentUp 1s ease-in forwards;
}

</style>
