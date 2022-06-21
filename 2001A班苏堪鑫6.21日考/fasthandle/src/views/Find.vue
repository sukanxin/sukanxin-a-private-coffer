<template>
  <div class="find">
    <template v-for="item in data">
      <dl :key="item.id">
        <dt>
          <van-image width="150" height="200" lazy-load :src="item.img" />
        </dt>
        <dd>
          <van-icon name="like-o" />
          {{ item.like }}
        </dd>
      </dl>
    </template>
  </div>
</template>

<script>
import Vue from 'vue'
import { Lazyload } from 'vant'

Vue.use(Lazyload)

// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true,
})
import { mapState, mapActions } from 'vuex'
export default {
  created() {
    this.getAxiosData()
  },
  methods: {
    ...mapActions(['getAxiosData']),
  },
  computed: {
    ...mapState(['data']),
  },
}
</script>

<style lang="scss">
.find {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  dl {
    width: 50%;
    height: 200px;
  }
}
</style>
