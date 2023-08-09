<template>
  <div id="HomePage">
    <div>
      <img class="robot" src="@/data/images/robot-home.png" aria-hidden="true">
    </div>
    <div class="get-started">
      <router-link to="/build">Get started</router-link> building your first robot!
    </div>
  </div>
</template>

<style lang="scss" scoped>
#HomePage {
  text-align: center;

  .robot {
    height: 300px;
  }
}
</style>