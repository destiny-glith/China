<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<style lang="scss">
@import "@/lib/reset.scss";

html,
body,
#app {
  @include rect(100%, 100%);
}
#app {
  display: flex;
  flex-direction: column;
  .container {
    @include flex();
    @include rect(100%, auto);
    @include flexbox();
    flex-direction: column;
    .header {
      width: 100%;
      height: 0.44rem;
      background-color: red;
    }
    .main {
      @include flex();
      @include rect(100%, auto);
      @include overflow(auto);
    }
  }
}
</style>
