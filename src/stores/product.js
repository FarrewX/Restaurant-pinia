import { defineStore } from "pinia"
import {ref} from 'vue'


export const useProductList = defineStore('product', () => {
  const products = ref([
      {
        title: 'kgproej',
        imageUrl: 'image/tonk111.png',
        price: 50,
        desc: 'ddewesadsa',
      },
      {
        title: '222',
        imageUrl: 'image/222.png',
        price: 55,
        desc: "dbnaikdgkdaw",
      },
      {
        title: '้กีรฟเวกีฟไ',
        imageUrl: '/image/333.png',
        price: 60,
        desc: "dwanduitgh7iuko",
      },
      {
        title: '444',
        imageUrl: 'image/nimman111.png',
        price: 65,
        desc: "bdayuidfvadaww",
      },
      {
        title: '555',
        imageUrl: 'image/nimman222.png',
        price: 70,
        desc: ";kfjoewhfhiowf",
      },
      {
        title: '666',
        imageUrl: 'image/nimman333.png',
        price: 75,
        desc: "dpipurjiqd",
      },
      {
        title: '777',
        imageUrl: 'image/maa111.png',
        price: 80,
        desc: "hufiwgbdudbwy",
      },
      {
        title: '888',
        imageUrl: 'image/maa222.png',
        price: 85,
        desc: "dfguatjdioa",
      },
      {
        title: '999',
        imageUrl: 'image/maa333.png',
        price: 90,
        desc: "iwjeiokwdhuaw",
      },
      {
        title: '000',
        imageUrl: 'image/papa111.png',
        price: 95,
        desc: "ouiwhaidyoikl"
      }
    ])

    return { products }
})