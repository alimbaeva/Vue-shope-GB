<template>
  <div class="page">
    <h2>Cart</h2>
    <div class="cart">
      <transition-group name="card">
      <card v-for="item of cart" v-bind:key="item.id" v-bind:data="item">
        <button class="btn" v-on:click="onRemoveBtnClk(item.id)"> Удалить </button>
      </card>
      </transition-group>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  components: {
    Card
  },
  computed: {
    cart() {
      return this.$store.getters.getCart
    }
  },
  methods: {
    onRemoveBtnClk(id) {
      this.$store.dispatch('removeFromCart', id)
    }
  }
}
</script>

<style>
  .cart {
    display: flex;
  }

.card-enter-active,
.card-leave-active {
  transition: opacity 1s ease;
}

.card-enter-from,
.card-leave-to {
  opacity: 0;
}
</style>