<template>
  <section>
    <slot name="question-title"></slot>
    <slot></slot>
    <div class="adjacent-buttons">
      <button class="btn btn-danger rounded-0">戻る</button>
      <button class="btn btn-danger rounded-0">次へ</button>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "~@/scss/commons";

.adjacent-buttons {
  display: flex;
  padding-top: 1.5rem;

  justify-content: space-between;
}
</style>
