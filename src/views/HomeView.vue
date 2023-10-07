<script setup>
import { RouterLink } from 'vue-router'
import { useProductList } from '../stores/product.js'

const product = useProductList()
</script>

<template>
  <div class="row mb-2">
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div class="card" style="margin-left: 30px; margin: auto; padding: auto;" v-for="(item, index) in product.products" :key="index">
        <RouterLink :to="{ name: 'info', params:{id:index} }">
          <img :src="item.imageUrl" alt="">
        </RouterLink>
        <p style="font-size: 20px;">{{ item.title }}</p>
        <p style="font-size: 16px;">price : {{ item.price }} บาท.</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
body {
  font-family: Arial, sans-serif;
}

img{
  width: auto;
  height: 200px;
}
.card {
  width: 250px;
  margin: 5px;
  margin-right: 30px;
  margin-top: 40px;
  padding: auto;
  display: inline-block;
  cursor: pointer;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
  padding-bottom: 10px;
}
</style>