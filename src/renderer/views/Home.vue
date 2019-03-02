<template>
  <div class="bg-mask"></div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
body {
  background-image: url("~@/assets/full-bg.png");
  background-size: auto 100%;
  animation: bg-slider 15s linear infinite;
}

.bg-mask {
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
}

@keyframes bg-slider {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 -100vh;
  }
}
</style>
