<template>
  <div>
    <header>
      <span>ele.me</span>
      <span>登陆|注册</span>
    </header>
    <div>
      当前定位城市: <span class="tips">定位不准时，请在城市列表中选择</span>
      <span>{{ guessCity }}</span>
    </div>
  </div>
</template>

<script>
  import api from 'api/getData'

  export default {
    data() {
      return {
        guessCity: ''
      }
    },
    created() {
      this.getCityGuess()
    },
    methods: {
      getCityGuess() {
        api.getCityGuess().then((res) => {
          console.log(res.data)
          this.guessCity = res.data.name
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>

<style lang="scss">
  header {
    width: 100%; height: 1.95rem; overflow: hidden; background:#3190e8;
    span {
      display: block;
      &:nth-child(1) {float: left;}
      &:nth-child(2) {float: right;}
    }

  }
</style>
