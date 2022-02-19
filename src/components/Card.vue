<template>
    <div class="card">
          <h3>{{data.title}}</h3>
          <p>({{data.price}}$)</p>
          <slot></slot>
    </div>
</template>

<script>
export default {
  props: [
    'data'
  ]
}
</script>

<style>
  .card{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid black;
    margin: 20px;
  }
</style>