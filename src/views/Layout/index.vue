<template>
  <div class="layout-page-container">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style lang="scss">
  .layout-page-container {
    position: relative;
  }
</style>
