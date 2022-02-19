<template>
  <div class="layout">
    <header>
        <h1>Shop</h1>
        <nav>
          <router-link to="/">Главная</router-link>
          <router-link to="/cart">Корзина</router-link>
        </nav>
    </header>
    <div class="slider">
      <transition name="slide-up">
        <div class="slide" v-if="curentSlide % 5 == 0"><h3>#1</h3></div>
        <div class="slide" v-else-if="curentSlide % 5 == 1"><h3>#2</h3></div>
        <div class="slide" v-else-if="curentSlide % 5 == 2"><h3>#3</h3></div>
        <div class="slide" v-else-if="curentSlide % 5 == 3"><h3>#4</h3></div>
        <div class="slide" v-else-if="curentSlide % 5 == 4"><h3>#5</h3></div>
      </transition>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        curentSlide: 0
      }
    },
    mounted() {
      this.$store.dispatch('loadCatalog')
      this.$store.dispatch('loadCart')

      setInterval(() => {
        this.curentSlide++
      }, 2000)
    }
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  header {
    height: 60px;
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
    padding: 30px;
  }

  .slider {
    position: relative;
  }

  .slide {
    position: absolute;
    top: 10px;
    left: 20px;
  }

  .slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
