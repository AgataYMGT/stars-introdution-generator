<template>
  <div class="bg-main">
    <div class="container">
      <div class="row justify-content-center">
        <white-box class="col-12 col-lg-10 my-sm-4">
          <article class="article-wrapper">
            <h1>{{ articleData.heading }}</h1>
            <img :src="imgSrces.thumbnail" class="post-section-img img-fluid">
            <p>こんにちは！何かと芸能ニュースが気になっちゃう管理人です（笑）。</p>
            <p>最近、何かとインターネット上で{{ articleData.profile.name }}さんが話題になっていますよね！</p>
            <p>なかなか謎が多い方ですから、皆さんの中にも割と気になってる方もいるんじゃないでしょうか？👀</p>
            <p>そこで、今回は{{ articleData.profile.name }}さんについて調べて、自分なりにまとめてみました！</p>
            <h2>{{ articleData.profile.name }}って何者なの？</h2>
            <img :src="imgSrces.who" class="post-section-img img-fluid">
            <p>さて、{{ articleData.profile.name }}さんはどういう人物なのでしょうか！？</p>
            <p>それでは、シンキングタイム…スタート！</p>
            <p>。</p>
            <p>。。</p>
            <p>。。。</p>
            <p>。。。。</p>
            <p>。。。。。シンキングタイム終了！</p>
            <p>どうでしたか？皆さん{{ articleData.profile.name }}さんについて色々思い浮かべることも多かったんじゃないでしょうか。</p>
            <p>{{ articleData.profile.name }}さんのプロフィールは以下のようになっています。</p>
            <ul class="list-group mb-3">
              <li class="list-group-item">名前: {{ articleData.profile.name }}</li>
              <li class="list-group-item">誕生日: {{ birthdayJa }}（{{ age }}歳）</li>
              <li class="list-group-item">出身地: {{ articleData.profile.birthplace }}</li>
              <li class="list-group-item">趣味: {{ articleData.profile.hobbies }}</li>
              <li class="list-group-item">Twitter アカウント: {{ articleData.twitter || '不明' }}</li>
            </ul>
            <p>このプロフィールを見ただけでは分からないことも多く、<b>まだまだ謎が多い方のようですね！</b></p>
            <h2>{{ articleData.profile.name }}の年収は？意外と稼いでる！？</h2>
            <img :src="imgSrces.salary" class="post-section-img img-fluid">
            <p>{{ articleData.profile.name }}さんは、果たしてどんな仕事をしているのでしょうか？</p>
            <p>なんといってもインターネット上で話題になるぐらいの方ですから、一般人とは違って凄い職業に就いてそうですよね！</p>
            <p>というわけで調べてみたのですが</p>
            <p>仕事内容については非公開とのことでした、残念！</p>
            <p>もしかしたら、人に言えないほど多く稼いでいる職業なのかもしれませんね！</p>
            <p>億とか稼いでるかも！？今後の情報に注目ですね！</p>
            <h2>{{ articleData.profile.name }}に恋人の存在が発覚！？気になる噂を徹底調査！</h2>
            <img :src="imgSrces.partner" class="post-section-img img-fluid">
            <p>ネット上で{{ articleData.profile.name }}さんの恋人について、色々な噂が飛び交っていますよね！</p>
            <p>恋愛話については、過剰に私も食いついてしまいます（笑）</p>
            <p>そんな噂について私なりに色々調べてみたんですが、<b>詳しいことはあまり分かりませんでした。</b></p>
            <p>でも{{ articleData.profile.name }}さんは容姿端麗ですから、モテそうですよね！</p>
            <p>今後新しい情報が公開されるかもしれないので、要チェックです！</p>
            <h2>まとめ</h2>
            <p>いかがでしたか？</p>
            <p>今回は{{ articleData.profile.name }}さんについて徹底的に調べてみましたが、謎が多かったですね！</p>
            <p>ですが、非公開な情報が多いからこそ探究心をくすぐられて調べたくなるもの！</p>
            <p>これからも{{ articleData.profile.name }}さんについて、どんどん調べていきたいと思います！</p>
            <p>ここまでお読みくださって、ありがとうございました！</p>
          </article>
        </white-box>
      </div>
    </div>
    <nav class="go-to-home nav d-flex justify-content-end py-3">
      <router-link :to="'/'" class="btn btn-primary rounded-0 mr-3">ホームに戻る</router-link>
    </nav>
    <white-box class="create-successful-box d-flex justify-content-center align-items-center">
      <span class="m-3">記事が生成されました！</span>
    </white-box>
  </div>
</template>

<script>
export default {
  components: {
    WhiteBox: require('@/components/WhiteBox').default
  },
  computed: {
    age: function() {
      let self = this

      let birthday = new Date(self.articleData.profile.birthday)
      let now = new Date()
      let thisYearBirthday = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate())
      let age = now.getFullYear() - birthday.getFullYear()

      return (now < thisYearBirthday) ? age - 1 : age
    },
    birthdayJa: function() {
      let self = this
      let birthday = new Date(self.articleData.profile.birthday)

      return birthday.getFullYear() + "年" + (birthday.getMonth() + 1) + "月" + birthday.getDate() + "日"
    }
  },
  data: function() {
    let self = this
    return {
      articleData: self.$route.query,
      imgSrces: {
        partner: require('@/assets/article/gahag-0118247603-1.jpg'),
        salary: require('@/assets/article/gahag-0098073571-1.jpg'),
        thumbnail: require('@/assets/article/gahag-0066691711.jpg'),
        who: require('@/assets/article/a52f9962fb036a8cdbe5abd6722bd2f0_s.jpg')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/scss/commons";

.bg-main {
  background-color: $gray-200;
}

.article-wrapper {
  padding: 1rem;
  @include media-breakpoint-up(sm) {
    padding: $article-h1;
  }
}

.post-thumbnail {
  margin-bottom: 2rem;
}

article {
  h1 {
    font-size: $article-h1;
    line-height: $article-h1-line-height;
  }

  h2 {
    font-size: $article-h2;
    line-height: $article-h2-line-height;

    padding: .5em;
    border-left: 8px solid $article-h2-border-color;
    border-bottom: 2px solid $article-h2-border-color;
  }

  p {
    line-height: 1.9rem;
  }

  img.post-section-img {
    padding-top: $article-img-padding-y;
    padding-bottom: $article-img-padding-y;
  }
}

nav.go-to-home {
  background-color: $bg-color-article-nav-go-to-home;
  position: sticky;
  bottom: 0;
  box-shadow:0px -2px 4px 0px #c3c7d8;
  width: 100%;
}

.create-successful-box {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 15em;
  height: 2em;
  font-size: 1.35rem;
  animation: fade-out-after-show 0.5s ease-in 1s forwards;
}

@keyframes fade-out-after-show {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
