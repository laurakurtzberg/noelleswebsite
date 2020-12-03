<template>
<div>
  <router-link class="back-button" tag="button" :to="'/'">
    back
  </router-link>
  <h1>Compliment Delivery Box</h1>
  <p>Your smile is like {{one}} kissing the ocean waves.</p>
  <button v-on:click="close">x</button>
  <div class="giftbox" v-on:click="shake" v-bind:class="{step1: isShaking, step2: isOpening, step3: isClosed}">
    <div class="cover">
      <div></div>
    </div>
    <div class="box"></div>
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
      isClosed: false,
      one: 'sunshine',
      two: '',
    }
  },
  methods: {
    shake: function() {
      this.isClosed = false;
      this.isShaking = true;
      setTimeout(() => {this.isShaking = false;}, 1500);
      setTimeout(() => {this.isOpening = true;}, 1500);
      // setTimeout(() => {this.isOpening = false;}, 3500);
    },
    close: function () {
      this.isClosed = true;
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

.giftbox {
	width: 300px;
	height: 220px;
	position: absolute;
	bottom: 10%;
	left: 50%;
	margin-left: -150px;
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
	transform: translateX(-50%);
}

/* shadow */
.giftbox .box::after {
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

@keyframes upAndRight {
  0% { transform: rotate(0deg); }
	100% { transform: rotate(45deg); }
}

@keyframes backDown {
  0% { transform: rotate(45deg); }
	100% { transform: rotate(0deg); }
}

.step1.giftbox {
	animation: wobble 0.5s linear infinite forwards;
}

.step1.giftbox .cover,
.step1.giftbox .cover div {
	animation: wobble 0.5s 0.1s linear infinite forwards;
}

.step2.giftbox .cover {
  transform-origin: 90% 45%;
	animation: upAndRight 1s ease-out forwards;
}

.step3.giftbox .cover {
  transform-origin: 90% 45%;
	animation: backDown 1s ease-out forwards;
}

</style>
