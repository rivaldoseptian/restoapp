<script>
import { useMenuStore } from '../stores/counter'
import { mapActions, mapState } from 'pinia'
import TableComponen from '../components/tableComponen.vue'
export default {
  components: {
    TableComponen
  },
  computed: {
    ...mapState(useMenuStore, ['orders']),
    totalHarga() {
      return this.orders.reduce(function (items, data) {
        return items + data.Menu.harga * data.order
      }, 0)
    }
  },
  methods: {
    ...mapActions(useMenuStore, ['getOrder', 'paymentGateWay', 'orderCheckout']),
    proceedToPayment() {
      //   this.paymentGateWay()
      const totalHarga = this.totalHarga
      this.paymentGateWay(totalHarga)
    }
  },

  created() {
    this.getOrder()
  }
}
</script>
<template>
  <div class="keranjang">
    <div class="container">
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/home" class="text-dark">Home</router-link>
              </li>

              <li class="breadcrumb-item active" aria-current="page">keranjang</li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- keranjang -->
      <div class="row">
        <div class="col">
          <h2>keranjang <strong>Saya</strong></h2>
          <hr />
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Makanan</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Keterangan</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Jumlah Harga</th>
                  <th scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <TableComponen
                  v-for="(item, index) in orders"
                  :key="item.id"
                  :item="item"
                  :index="index"
                />
                <tr>
                  <td colspan="5" align="right">
                    <strong>Total Harga : </strong>
                  </td>
                  <td>
                    <strong>Rp.{{ totalHarga }}</strong>
                  </td>
                </tr>
                <tr>
                  <td colspan="6" align="right">
                    <router-link to="/home" class="btn btn-success" @click.prevent="orderCheckout"
                      >Cash Pay</router-link
                    >
                  </td>
                  <td>
                    <a href="#" class="btn btn-primary" @click.prevent="proceedToPayment"
                      >Credit Pay</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
