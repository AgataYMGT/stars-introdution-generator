<template>
  <div class="bg-main">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <white-box class="col-10 p-4 m-3">
          <header>
            <h1>記事の作成</h1>
          </header>
          <main role="main">
            <form>
              <form-parts :id="1">
                <div class="form-group">
                  <p slot="question-title">紹介する人物の名前を入力</p>
                  <input type="text" class="form-control" v-model="articleData.name">
                </div>
              </form-parts>
            </form>
          </main>
        </white-box>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    FormParts: require('@/components/Create/FormParts').default,
    WhiteBox: require('@/components/WhiteBox').default
  },
  computed: {
    sentences: function() {
      let self = this;
      return {
        headings: [
          {
            id: 1,
            content: self.articleData.name + 'って誰？年齢や恋人は？私なりに調べてみました！'
          },
          {
            id: 2,
            content: self.articleData.name + 'は結婚してる！？　独身！？　彼女は！？　調べてみました！'
          }
        ]
      }
    }
  },
  data: function() {
    return {
      articleData: {
        name: ''
      },
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/scss/commons";

h1 {
  margin-bottom: $h1-padding-bottom + .5em;
  padding-left: .75em;
  padding-bottom: $h1-padding-bottom;
  border-bottom: 1px solid $bordercolor-top-heading;
}

.bg-main {
  background-color: rgba($color: $color-project, $alpha: 0.8);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

