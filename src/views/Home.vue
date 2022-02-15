<template>
  <div class="page">
    <h2>Home</h2>
    <div class="catalog">
      <card v-for="item of catalog" v-bind:key="item.id" v-bind:data="item">
        <button class="button" v-on:click="onBayBtn(item.id)">Купить</button>
      </card>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  components: {
    Card,
  },
  props: ["catalog"],
  methods: {
    onBayBtn(id) {
      console.log(id);
      this.$emit("buy", id);
    },
  },
};
</script>

<style lang="scss">
.catalog {
  display: flex;
}
.button {
  background: transparent;
  padding: 10px;
  margin: 20px;
  border: 1px solid black;
}
.button:hover {
  color: white;
  background: black;
}
</style>