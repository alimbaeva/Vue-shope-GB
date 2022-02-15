<template>
  <div class="layout">
    <header>
      <h1>Shope</h1>
      <nav>
        <router-link to="/">Главная</router-link>
        <router-link to="/cart">корзина</router-link>
      </nav>
    </header>
    <router-view v-bind:catalog="catalog" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      catalog: [
        { id: 1, name: "Шляпа", price: 20 },
        { id: 2, name: "Туфли", price: 30 },
        { id: 3, name: "Пальто", price: 120 },
      ],
      cart: [],
    };
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
header {
  height: 80px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 10px #ccc;

  nav {
    a {
      margin-right: 20px;
    }
  }
}

.page {
  padding: 35px;
}
</style>
