<template>
  <div class="bg-mask">
    <main>
      <div>
        <section>
          <img :src="imgSrces.logo" class="img-fluid logo-image" />
        </section>
        <section>
          <button class="btn btn-outline-project btn-lg rounded-pill">はじめる</button>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      imgSrces: {
        logo: require("@/assets/logo.png")
      }
    }
  }
}
</script>

<style lang="scss">
@import "~@/scss/commons";

body {
  background-image: url("~@/assets/full-bg.png");
  background-size: auto 100%;
  animation: bg-slider 15s linear infinite;
}

main {
  @include position-middle() {
    text-align: center;
  };

  section {
    margin-bottom: 40px;
  }
}

.bg-mask {
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
}

.logo-image {
  width: 80%;
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
