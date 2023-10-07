<script setup>
import { useProductList } from '../stores/product'
import { useRouter, useRoute } from 'vue-router'
import { useCartStore } from '../stores/cart.js'
import axios from 'axios'
import { ref, onMounted } from 'vue'

const CartStore = useCartStore()
const route = useRoute()
const product = useProductList().products[parseInt(route.params.id)] // ดึงข้อมูลสินค้าจาก store
const image = product.imageUrl

const quantity = ref(1)

const increment_quantity = () => {
    quantity.value++
}

const decrement_quantity = () => quantity.value--

const load_product = ref(false)

const product_detail = async () => {
    await axios.get(`${import.meta.env.VITE_API}/${route.params.id}`)
    .then((response) => {
        product.value = response.data
        load_product.value = true
    }).catch((err) => {
        console.log(err)
    })
}

onMounted(() => product_detail())
</script>

<template>
    <div>
        <img :src="image"><br><br><br><br>
        <h3>{{ product.title }}</h3><br>
        <h5>Price : {{ product.price }} บาท.</h5> <br><br>
        <span>{{ product.desc }}</span> <br><br><br><br>
    </div>
    <div class="card-actions">
        <button class="btn btn-primary btn-sm" @click="CartStore.AddTOCart(product.id, product.price)">Add to Cart</button>
    </div>
    <button style="background-color: rgb(236, 131, 131); " class="btn">
        <router-link class="nav-item nav-link link-body-emphasis" to="/">กลับ</router-link>
    </button>
</template>


