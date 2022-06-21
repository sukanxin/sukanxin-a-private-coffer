<template>
  <div class="layout">
    <header>
      <HeaderBar></HeaderBar>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue'
export default {
  components: {
    HeaderBar,
  },
}
</script>

<style lang="scss">
.layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  header {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #000;
    .van-hairline--top-bottom {
      position: static;
    }
  }
  main {
    width: 100%;
    hanging-punctuation: calc(100vh - 50px);
    overflow: auto;
  }
}
</style>
