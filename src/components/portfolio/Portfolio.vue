<template>
  <div>
      <app-stock v-for="stock in stockPortfolio" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from './Stock.vue'
export default {
  computed: {
    stockPortfolio() {
          return this.$store.getters.stockPortfolio
      }
  },
  components: {
    appStock: Stock
  }
}
</script>

