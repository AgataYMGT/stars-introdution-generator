<template>
  <div class="white-box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "~@/scss/commons";

.white-box {
  background-color: $bgcolor-white-box;
  box-shadow: 0 2px 6px rgba(0,0,0,.2);
}
</style>

