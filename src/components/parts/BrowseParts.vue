<script setup>
const menuList = [
    { name: 'Heads', routeName: 'BrowseHeads' },
    { name: 'Arms', routeName: 'BrowseArms' },
    { name: 'Torsos', routeName: 'BrowseTorsos' },
    { name: 'Bases', routeName: 'BrowseBases' },
];
</script>

<template>
    <div id="BrowseParts">
        <h1>Browse Parts</h1>
        <ul class="menu">
            <li v-for="item in menuList" :key="item.name">
                <router-link :to="{ name: item.routeName }">{{ item.name }}</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>
  
<style scoped>
h1 {
    text-align: center;
}

.menu {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
    font-size: 20px;
}

ul {
    list-style-type: none;
}

a {
    color: palevioletred;
}
</style>