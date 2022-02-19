<template>
  <div class="page">
    <h2>Home</h2>
    <div class="catalog">
        <card v-for="item of catalog" v-bind:key="item.id" v-bind:data="item">
          <button class="btn" v-on:click="onBuyBtnClk(item)"> Купить </button>
        </card>
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
    catalog() {
      return this.$store.getters.getCatalog
    }
  },
  methods: {
    onBuyBtnClk(product) {
      this.$store.dispatch('addToCart', product)
    }
  },

}
</script>

<style lang="scss">
  .catalog {
    display: flex;
  }

  .btn {
    background: transparent;
    padding: 10px;
    margin: 20px;
    border: 1px solid black;
  }

  .btn:hover {
    color: white;
    background: black;
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