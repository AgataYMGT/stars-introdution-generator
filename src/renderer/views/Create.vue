<template>
  <div class="bg-main">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <white-box class="col-10 p-4 m-3 box-height">
          <header>
            <h1>記事の作成</h1>
          </header>
          <main role="main">
            <form>
              <div class="form-transition-box">
                <transition name="form-page">
                  <form-parts :key="1" v-if="isCurrent(1)" v-model="currentQuestionId" class="form-page">
                    <div class="form-group">
                      <p>紹介する人物の名前を入力</p>
                      <input type="text" class="form-control" v-model="articleData.name">
                    </div>
                  </form-parts>
                  <form-parts :key="2" v-if="isCurrent(2)" v-model="currentQuestionId" class="form-page">
                    <div class="form-group">
                      <p>はじめの文を選択</p>
                      <select class="form-control">
                        <option v-for="heading in sentences.headings" :key="heading.content">{{ heading.content }}</option>
                      </select>
                    </div>
                  </form-parts>
                  <form-parts :key="3" v-if="isCurrent(3)" v-model="currentQuestionId" class="form-page">
                    <p>紹介する人物のプロフィールを入力</p>
                    <div class="form-row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>誕生日</label>
                          <input type="date" name="birthday" class="form-control">
                        </div>
                        <div class="form-group">
                          <label>出身地</label>
                          <select class="form-control">
                            <option v-for="prefecture in prefectures" :key="prefecture.code" :value="prefecture.name">{{ prefecture.name }}</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <label>Twitterアカウント</label>
                          <input type="text" name="twitter" value="@" class="form-control">
                        </div>
                      </div>
                    </div>
                  </form-parts>
                  <form-parts :key="4" v-if="isCurrent(4)" v-model="currentQuestionId" class="form-page">
                    <p>具体的な記事内容を選択</p>
                    <div class="form-check">
                      <input type="checkbox" name="article-details" value="salary">
                      <label class="form-check-label">年収「{{ sentences.salary }}」</label>
                    </div>
                    <div class="form-check">
                      <input type="checkbox" name="article-details" value="partner">
                      <label class="form-check-label">恋愛「{{ sentences.partner }}」</label>
                    </div>
                  </form-parts>
                </transition>
              </div>
            </form>
          </main>
        </white-box>
      </div>
    </div>
  </div>
</template>

<script>
import prefectures from '@/assets/prefectures.json'
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
        ],
        partner: self.articleData.name + "に恋人の存在が発覚！？噂を徹底調査！",
        salary: self.articleData.name + "の年収は？意外と稼いでる！？"
      }
    }
  },
  data: function() {
    return {
      articleData: {
        name: ''
      },
      currentQuestionId: 1,
      prefectures: prefectures.prefectures
    }
  },
  methods: {
    isCurrent: function(id) {
      let self = this;
      return self.currentQuestionId === id;
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

.form-transition-box {
  position: relative;
  overflow: hidden;
}

.box-height {
  height: 90vh;
}

.form-page {
  position: relative;
  transition: all 1s;

  &-leave-active {
    position: absolute;
  }

  &-enter {
    transform: translateX(100%);
  }
  
  &-leave-to {
    transform: translateX(-100%);
  }

}
</style>

