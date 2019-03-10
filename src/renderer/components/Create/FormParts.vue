<template>
  <section class="w-100">
    <slot></slot>
    <div class="d-flex justify-content-between">
      <router-link :to="'/'" class="btn btn-primary rounded-0">ホームに戻る</router-link>
      <div class="adjacent-buttons">
        <button type="button" v-if="!isFirstQuestion" @click="$emit('input', value - 1)" class="btn btn-danger rounded-0">戻る</button>
        <button type="button" v-if="!isLastQuestion" @click="$emit('input', value + 1)" :disabled="!isValid" class="btn btn-danger rounded-0" >次へ</button>
        <button type="submit" v-if="isLastQuestion" :disabled="!isValid" class="btn btn-success rounded-0">記事を生成</button>
        <input type="text" name="dummy" class="d-none">
      </div>
    </div>
  </section>
</template>

<script>
const lastQuestionId = 4;

export default {
  computed: {
    isFirstQuestion: function() {
      let self = this;
      return self.value - 1 === 0;
    },
    isLastQuestion: function() {
      let self = this;
      return self.value === lastQuestionId;
    }
  },
  props: {
    isValid: [String, Boolean],
    value: Number,
  }
}
</script>

<style lang="scss" scoped>
@import "~@/scss/commons";

.adjacent-buttons {
  display: flex;
  justify-content: flex-end;

  & > button {
    margin-left: 1rem;
  }
}
</style>
