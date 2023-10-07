import { defineStore } from 'pinia';
import { ref, computed } from 'vue'
import { useProductList } from './product'

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'



export const useCartStore = defineStore('', () => {
    const item = ref([])

    const AddTOCart = (id, price, quantity = 1) => {
        const data = {
            id,
            price,
            quantity
        }
        const findId = item.value.find(e => e.id === data.id)

        if(findId) {
            alert_AddTOCart_failed()
        } else {
            item.value.push(data)
            saveToLocalStorage()
            alert_AddTOCart()
        }

        
        console.log(item.value)
}

    const AddTOCart_detail = (id, price, quantity) => {
      const data = {
          id,
          price,
          quantity
      }

      const findId = item.value.find(e => e.id == data.id)

      if(findId) {
          const findIndexProduct = item.value.findIndex(e => e.id == data.id)
          item.value[findIndexProduct].quantity = item.value[findIndexProduct].quantity + quantity
          saveToLocalStorage()
          alert_AddTOCart()
      } else {
          item.value.push(data)
          saveToLocalStorage()
          alert_AddTOCart()
      }
  }

  const saveToLocalStorage = () => {
      localStorage.setItem('item', JSON.stringify(item.value))
  }

  const loadFromLocalStorage = () => {
      if(localStorage.getItem('item')) {
          item.value = JSON.parse(localStorage.getItem('item'))
      }
  }

  const cart_previews = computed(() => {
      const product_store = useProductList()

     return item.value.map((prd, i) => {
          const findIndexProduct = product_store.products.findIndex(e => e.id == prd.id)

        return  {
              product : product_store.products[findIndexProduct],
              quantity : item.value[i].quantity,
              total_product : product_store.products[findIndexProduct].price * item.value[i].quantity
          }
      })
  })

  const total = computed(() => {
      return item.value.reduce((sum, prd) => sum + prd.price * prd.quantity ,0)
  })

  const alert_AddTOCart = () => {
      Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'เพิ่มสินค้าเรียบร้อยแล้ว',
          showConfirmButton: false,
          timer: 1500
        })
  }

  const alert_AddTOCart_failed = () => {
      Swal.fire({
          position: 'top-center',
          icon: 'error',
          title: 'สินค้ามีอยู่ในตะกร้าแล้ว',
          showConfirmButton: false,
          timer: 1500
        })
  }

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

  return { item, AddTOCart, loadFromLocalStorage, cart_previews, increment_quantity, decrement_quantity, remove_cart, AddTOCart_detail, clear_cart, total }
})
