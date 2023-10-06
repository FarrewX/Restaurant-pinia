<script setup>
import { useProductList } from '../stores/product.js'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const id = parseInt(route.params.id) // ดึงค่าไอดีจากพารามิเตอร์
const product = useProductList().products[id] // ดึงข้อมูลสินค้าจาก store
const imageUrls = product.imageUrl

const productItems = []

</script>

<template>
    <div>
        <div>
            <img :src="imageUrls">
        </div><br><br><br>
        
        This is info {{ product.title }} <br>
        <span>Price : {{ product.price }} บาท.</span> <br>
        <span>{{ product.desc }}</span> <br>
    </div>
    <div class="card-actions">
        <button class="btn btn-primary" @click="cartStore.add(product)">Add to Cart</button>
    </div>
    <button style="background-color: rgb(236, 131, 131); " class="btn">
        <router-link class="nav-item nav-link link-body-emphasis" to="/">กลับ</router-link>
    </button>
</template>


