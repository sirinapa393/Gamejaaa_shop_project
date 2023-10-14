<template>
  <navbar_product />
  <div class="container">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import navbar_product from './components/navbar_product.vue';
import { useProductStore } from './store/product';
const product_store = useProductStore()

onMounted(() => product_store.fetch_products())


</script> 

<style lang="scss" scoped>
  .row.mt-2 {
    display: flex;
    flex-direction: row; 
    justify-content: space-between; 
    align-items: center;
    flex-wrap: wrap; /* เพิ่มบรรทัดนี้เพื่อให้รายการของคุณขึ้นบรรทัดใหม่เมื่อความกว้างไม่พอ */
  }

</style>
