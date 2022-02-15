<template>
  <div class="page">
    <h1>Cart</h1>
    <div class="cart">
      <card v-for="item of cart" v-bind:key="item.id" v-bind:data="item" />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  components: { Card },
  props: ["cart", "catalog"],
};
</script>

<style lang="scss">
.cart {
  display: flex;
}
</style>