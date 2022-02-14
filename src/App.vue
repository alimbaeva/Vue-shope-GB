<template>
  <h2>Hello, {{name}}</h2>
  <input type='text' v-model='name' />
</template>

<script>
  export default{
    data(){
      return{
        name: 'John'
      }
    }
  }
</script>

<style lang="scss">
 
</style>
