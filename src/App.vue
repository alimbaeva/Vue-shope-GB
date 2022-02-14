<template>
  <div id='app'>
    <header>
      <span class='logo'>SHOP</span>
      <input type='text' class='search' />
      <button class='cart-button'>Корзина</button>
    </header>
    <main>
      <section class='goods'>
        <div class='item' v-for='item in filteredGoods'>
          <h2>{{item.product_name}}</h2>
          <p>{{item.price}}</P>
          <button name="add-to-basket" v-on:click.prevent="addItem(item)">Add to basket</button>
        </div>
        <div class='goods-empty' v-if="filteredGoods.length === 0">
          нету товаров
        </div>
      </section>
    </main>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        name: 'John'
      }
    },

    computed: {
      filteredGoods(){

      }
    }

  }
</script>

<style lang="scss">
 
</style>
