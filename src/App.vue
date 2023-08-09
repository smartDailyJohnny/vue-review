<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            <img src="@/data/images/build-a-bot-logo.png" class="logo">Build-a-Bot
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/build" class="nav-link">Build</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/parts/browse" class="nav-link">Browse Parts</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style lang="scss">
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>

<style lang="scss" scoped>
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

.nav-link {
  text-decoration: none;
  color: inherit;
}

.router-link-active {
  color: white;
}
</style>
