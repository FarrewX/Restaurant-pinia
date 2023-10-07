<script setup>
import { useProductList } from '../stores/product'
import { useRouter, useRoute } from 'vue-router'
import { useCartStore } from '../stores/cart.js'
import { currencyTHB } from '../shared/currency'
import { computed } from 'vue'
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

const route = useRoute()
const id = parseInt(route.params.id) // ดึงค่าไอดีจากพารามิเตอร์
const product = useProductList() // ดึงข้อมูลสินค้าจาก store
const CartStore = useCartStore()
const carts = computed(() => CartStore.cart_previews)
</script>

<template>
    <h1 class="mt-3">ตะกร้าสินค้า</h1>
    <div class="d-flex justify-content-center" v-if="!product.load_products">
        <h2>กำลังโหลดข้อมูลสินค้า...</h2>
    </div>
    <table class="table" v-else>
        <thead>
            <tr>
                <th>สินค้า</th>
                <th>ราคา</th>
                <th>จำนวน</th>
                <th>รวม</th>
                <th>ลบสินค้า</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(cart, index) in carts" :key="index">
                <td>
                    <img :src="cart.product.imageUrl" alt="" class="img-thumbnail" width="100">
                    {{ cart.product.title }}
                </td>
                <td>{{ currencyTHB(cart.product.price) }} บาท</td>
                <td>
                    <button class="btn btn-sm btn-secondary" @click="CartStore.decrement_quantity(index)">-</button>
                    <span class="mx-2">{{ cart.quantity }}</span>
                    <button class="btn btn-sm btn-secondary" @click="CartStore.increment_quantity(index)">+</button>
                </td>
                <td>{{ currencyTHB(cart.total_product) }} บาท</td>
                <td>
                    <button class="btn btn-danger" @click="CartStore.remove_cart(index)">ลบ</button>
                </td>
            </tr>
        </tbody>
    </table>
        <button class="btn btn-primary mb-5" @click="CartStore.clear_cart()">เคลียตะกร้า</button>
        <button class="btn btn-success mb-5 mx-2"  @click="checkout()">ชำระเงิน {{ currencyTHB(CartStore.total) }}</button>
   
</template>

<script>

const increment_quantity = (i) => {
      item.value[i].quantity += 1
      saveToLocalStorage()
  }

  const decrement_quantity = (i) => {
      item.value[i].quantity -= 1
      saveToLocalStorage()

      if(item.value[i].quantity == 0) {
          item.value.splice(i, 1)
          saveToLocalStorage()
      }
  }

  const remove_cart = (i) => {
      item.value.splice(i, 1)
      saveToLocalStorage()
  }

  const clear_cart = () => {
      item.value = []
      saveToLocalStorage()
  }

  function checkout() {
    Swal.fire({
        title: 'สั่งซื้อหรือไม่?',
        text: "ยืนยันคำสั่งซื้อ",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sure'
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'สั่งซื้อสำเร็จ',
                'success', 
            )
        }
    })
  }


</script>