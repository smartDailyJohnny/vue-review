<script setup>
// import HomePage from './components/home/HomePage.vue'
import RobotBuilder from './components/build/RobotBuilder.vue';
// import Search from './components/search/Search.vue';
</script>

<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <img src="@/data/images/build-a-bot-logo.png" class="logo">Build-a-Bot
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <!-- <HomePage /> -->
    <RobotBuilder />
    <!-- <Search /> -->
  </main>
</template>

<style lang="scss">
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}

main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}

header {
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
}

ul {
  padding: 3px;
  display: flex;
}

.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}

.logo {
  vertical-align: middle;
  height: 30px;
}
</style>