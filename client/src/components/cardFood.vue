<script>
import { useMenuStore } from '../stores/counter'
import { mapActions } from 'pinia'
export default {
  props: ['menu'],
  methods: {
    ...mapActions(useMenuStore, ['createOrder']),
    orderHandler() {
      this.pindah(), this.update(this.menu.id)
    },
    pindah() {
      this.$router.push('/food/order/' + this.menu.id)
    },
    update() {
      const menuId = this.menu.id
      this.createOrder(menuId)
    }
  }
}
</script>

<template>
  <div class="col-sm-3 mt-4">
    <div class="d-flex flex-row">
      <div class="card shadow mb-5 bg-body-tertiary" style="width: 16rem; height: 10%">
        <img
          :src="menu.imgUrl"
          class="card-img-top aspect-ratio-16x9"
          alt="..."
          width="200"
          height="200"
        />
        <div class="card-body">
          <h5 class="card-title">{{ menu.name }}</h5>
          <p class="card-text">Harga : Rp.{{ menu.harga }}</p>
          <a href="#" class="btn btn-primary btn-sm" @click.prevent="orderHandler"
            ><i class="fa-solid fa-cart-shopping"></i> Pesan</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
