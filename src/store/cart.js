import { defineStore } from "pinia";

import { ref } from "vue";

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

export const useCartStore = defineStore('useCartStore', () =>{
    const cart = ref([])
    
    const alert_add_card = () => {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'เพิ่มสินค้าเรียบร้อยเเล้ว',
            showConfirmButton: false,
            timer: 1500
          })
    }

    const alert_add_card_failed = () => {
        Swal.fire({
            position: 'top-center',
            icon: 'eror',
            title: 'คณได้เพิ่มสินค้าไปเเล้ว',
            showConfirmButton: false,
            timer: 1500
          })
    }

    return { add_cart}
})