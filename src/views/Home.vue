<template>
  <div class="page">
    <h2>Home</h2>
    <div class="catalog">
      <card v-for="item of catalog" v-bind:key="item.id" v-bind:data="item" />
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
};
</script>

<style lang="scss">
.catalog {
  display: flex;
}
</style>