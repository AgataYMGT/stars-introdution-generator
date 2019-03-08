<template>
  <section>
    <slot name="question-title"></slot>
    <slot></slot>
    <div class="adjacent-buttons">
      <button v-if="!isFirstQuestion" @click="$emit('input', id - 1)" class="btn btn-danger rounded-0">戻る</button>
      <button @click="$emit('input', id + 1)" class="btn btn-danger rounded-0">次へ</button>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    isFirstQuestion: function() {
      let self = this;
      return self.id - 1 === 0;
    }
  },
  props: {
    id: Number
  }
}
</script>

<style lang="scss" scoped>
@import "~@/scss/commons";

.adjacent-buttons {
  display: flex;
  padding-top: 1.5rem;

  justify-content: flex-end;

  & > button {
    margin-left: 1rem;
  }
}
</style>
