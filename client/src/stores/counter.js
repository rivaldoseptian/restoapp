import { defineStore } from 'pinia'
import axios from 'axios'

export const useMenuStore = defineStore('counter', {
  state: () => ({
    // baseUrl: 'http://localhost:3000',
    baseUrl: 'https://known-activity-production.up.railway.app',
    access_token: localStorage.access_token,
    menus: [],
    orders: [],
    menu: {},
    page: 0
  }),
  getters: { menulength: (state) => state.menus.length },
  actions: {
    async loginHandler(inputlogin) {
      try {
        const { data } = await axios({
          url: this.baseUrl + '/pub/login',
          method: 'POST',
          data: inputlogin
        })
        localStorage.setItem('access_token', data.access_token)
        this.access_token = data.access_token
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Succes Login',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.push({ name: 'home' })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`
        })
      }
    },
    async fecthMenu(page) {
      console.log(page)
      let url = this.baseUrl + '/pub/menu'
      if (page) {
        url += `?page=${page}`
      }
      try {
        const { data } = await axios({
          url,
          method: 'GET'
        })
        this.menus = data
        console.log(menus)
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`
        })
      }
    },
    async createOrder(id) {
      try {
        const { data } = await axios({
          url: this.baseUrl + `/pub/order/${id}`,
          method: 'POST',
          headers: {
            access_token: this.access_token
          }
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`
        })
      }
    },
    async updateOrder(id, inputUpdate) {
      try {
        const { data } = await axios({
          url: this.baseUrl + `/pub/order/${id}`,
          method: 'PUT',
          headers: {
            access_token: this.access_token
          },
          data: inputUpdate
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`
        })
      }
    },
    logOut() {
      localStorage.clear()
      this.access_token = null
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Succes LogOut',
        showConfirmButton: false,
        timer: 1500
      })
    },
    async registerHandler(inputRegister) {
      try {
        const { data } = await axios({
          url: this.baseUrl + '/pub/register',
          method: 'POST',
          data: inputRegister
        })
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Succes Register',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.push({ name: 'login' })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`
        })
      }
    },
    async getOrder() {
      try {
        const { data } = await axios({
          url: this.baseUrl + '/pub/order',
          method: 'GET',
          headers: {
            access_token: this.access_token
          }
        })
        this.orders = data
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`
        })
      }
    },
    async deleteOrder(id) {
      try {
        const { data } = await axios({
          url: this.baseUrl + `/pub/order/${id}`,
          method: 'DELETE',
          headers: {
            access_token: this.access_token
          }
        })
        this.getOrder()
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`
        })
      }
    },
    async succesfulpayment() {
      try {
        const { data } = await axios({
          url: this.baseUrl + '/pub/order/payment',
          method: 'DELETE',
          headers: {
            access_token: this.access_token
          }
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`
        })
      }
    },

    async paymentGateWay(totalHarga) {
      try {
        console.log(totalHarga)
        const { data } = await axios({
          url: this.baseUrl + '/pub/generate-midtrans-token',
          method: 'POST',
          headers: {
            access_token: this.access_token
          },
          data: {
            harga: totalHarga
          }
        })

        const succes = this.succesfulpayment
        const router = this.router

        window.snap.pay(data.token, {
          onSuccess: function (result) {
            succes()
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Pesanan segera di buat Silahkan tunggu :)',
              showConfirmButton: false,
              timer: 1500
            })
            router.push({ name: 'home' })
          }
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`
        })
      }
    },
    async showDetailMenu(id) {
      try {
        const { data } = await axios({
          url: this.baseUrl + `/pub/menu/detail/${id}`,
          method: 'GET',
          headers: {
            access_token: this.access_token
          }
        })
        this.menu = data
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`
        })
      }
    },
    async orderCheckout() {
      try {
        const { data } = await axios({
          url: this.baseUrl + '/pub/order/delete',
          method: 'DELETE',
          headers: {
            access_token: this.access_token
          }
        })
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Pesanan segera di buat Silahkan tunggu :)',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.push({ name: 'home' })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`
        })
      }
    },
    async loginHandlerGoogle(credential) {
      console.log(credential)
      try {
        const { data } = await axios({
          url: this.baseUrl + '/pub/googleSignIn',
          method: 'POST',
          headers: {
            token_google: credential
          }
        })
        localStorage.setItem('access_token', data.access_token)
        this.access_token = data.access_token
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Succes Login',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.push({ name: 'home' })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`
        })
      }
    }
  }
})
