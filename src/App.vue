<script setup>
import { useRobotsStore } from "@/stores/robots";
const robotsStore = useRobotsStore()
</script>

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
        <li class="nav-item cart">
          <router-link to="/cart" class="nav-link">Cart</router-link>
          <div class="cart-items">
            {{ robotsStore.cart.length }}
          </div>
        </li>
      </ul>
    </nav>
  </header>
  <!-- this here is the sidebar + the main content -->
  <div class="container">
    <aside class="aside">
      <router-view name="sidebar" />
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
</style>

<style lang="scss" scoped>
main {
  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;
}

header {
  background-color: #999;
  width: 1184px;
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

.nav-item.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}

.logo {
  vertical-align: middle;
  height: 30px;
}

// =====================
.nav-link {
  text-decoration: none;
  color: inherit;
}

.router-link-active {
  color: white;
}

.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}

.aside {
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}

.cart-items {
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 18px;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: mediumaquamarine;
}
</style>
