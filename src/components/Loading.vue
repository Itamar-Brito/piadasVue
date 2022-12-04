<template>
  <div class="row">
    <div class="col col-lg-12 loading-spiner">
      <div class="semipolar-spinner" style="spinnerStyle">
        <div class="ring"></div>
        <div class="ring"></div>
        <div class="ring"></div>
        <div class="ring"></div>
        <div class="ring"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loading-spiner{
  padding-top: 45px;
  padding-left: 45%;
}
.semipolar-spinner, .semipolar-spinner * {
      box-sizing: border-box;
    }

    .semipolar-spinner {
      height: 150px;
      width: 200px;
      position: relative;
    }

    .semipolar-spinner .ring {
      border-radius: 90%;
      position: absolute;
      border: calc(150px * 0.05) solid transparent;
      border-top-color: #525252;
      border-left-color: #3f407c;
      animation: semipolar-spinner-animation 2s infinite;
    }

    .semipolar-spinner .ring:nth-child(1) {
      height: calc(150px - 150px * 0.2 * 0);
      width: calc(150px - 150px * 0.2 * 0);
      top: calc(150px * 0.1 * 0);
      left: calc(150px * 0.1 * 0);
      animation-delay: calc(2000ms * 0.1 * 4);
      z-index: 5;
    }

    .semipolar-spinner .ring:nth-child(2) {
      height: calc(150px - 150px * 0.2 * 1);
      width: calc(150px - 150px * 0.2 * 1);
      top: calc(150px * 0.1 * 1);
      left: calc(150px * 0.1 * 1);
      animation-delay: calc(2000ms * 0.1 * 3);
      z-index: 4;
    }

    .semipolar-spinner .ring:nth-child(3) {
      height: calc(150px - 150px * 0.2 * 2);
      width: calc(150px - 150px * 0.2 * 2);
      top: calc(150px * 0.1 * 2);
      left: calc(150px * 0.1 * 2);
      animation-delay: calc(2000ms * 0.1 * 2);
      z-index: 3;
    }

    .semipolar-spinner .ring:nth-child(4) {
      height: calc(150px - 150px * 0.2 * 3);
      width: calc(150px - 150px * 0.2 * 3);
      top: calc(150px * 0.1 * 3);
      left: calc(150px * 0.1 * 3);
      animation-delay: calc(2000ms * 0.1 * 1);
      z-index: 2;
    }

    .semipolar-spinner .ring:nth-child(5) {
      height: calc(150px - 150px * 0.2 * 4);
      width: calc(150px - 150px * 0.2 * 4);
      top: calc(150px * 0.1 * 4);
      left: calc(150px * 0.1 * 4);
      animation-delay: calc(2000ms * 0.1 * 0);
      z-index: 1;
    }

    @keyframes semipolar-spinner-animation {
      70% {
        transform: rotate(360deg) scale(0.7);
      }
    }
</style>
