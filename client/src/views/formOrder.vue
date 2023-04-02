<script>
import { useMenuStore } from '../stores/counter'
import { mapActions, mapState } from 'pinia'

export default {
  data() {
    return {
      inputUpdate: {
        order: '',
        keterangan: ''
      }
    }
  },
  computed: {
    ...mapState(useMenuStore, ['menu'])
  },
  methods: {
    ...mapActions(useMenuStore, ['updateOrder', 'showDetailMenu']),
    submitHandler() {
      this.changepage(), this.updateHandler(this.$route.params.id, this.inputUpdate)
    },
    updateHandler() {
      const menuId = this.$route.params.id
      const input = this.inputUpdate
      this.updateOrder(menuId, input)
    },
    changepage() {
      this.$router.push('/keranjang')
    }
  },
  created() {
    this.showDetailMenu(this.$route.params.id)
  }
}
</script>

<template>
  <div class="food-order">
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/home" class="text-dark">Home</router-link>
              </li>

              <li class="breadcrumb-item active" aria-current="page">Order</li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- foodForm -->
      <div class="row">
        <div class="col-md-5">
          <img :src="menu.imgUrl" alt="" width="500" height="300" class="shadow" />
        </div>
        <div class="col-md-3">
          <h2>{{ menu.name }}</h2>
          <hr />
          <h4>
            Harga : <strong>Rp.{{ menu.harga }}</strong>
          </h4>
          <form class="mt-4" @submit.prevent="submitHandler">
            <div class="form-group">
              <label for="jumlahPemesanan">Jumlah Pesan</label>
              <input type="number" class="form-control" v-model="inputUpdate.order" />
            </div>
            <div class="form-group">
              <label for="keterangan">Keterangan</label>
              <textarea
                class="form-control"
                placeholder="keterangan: No.Table.."
                v-model="inputUpdate.keterangan"
              ></textarea>
            </div>
            <br />
            <button type="submit" class="btn btn-success">
              <i class="fa-solid fa-cart-shopping"> Pesan</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
