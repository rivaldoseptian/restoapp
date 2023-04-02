<script>
import Hero from '../components/hero.vue'
import Card from '../components/cardFood.vue'
import { useMenuStore } from '../stores/counter'
import { mapActions, mapState, mapWritableState } from 'pinia'
export default {
  components: {
    Hero,
    Card
  },
  computed: {
    ...mapState(useMenuStore, ['menus', 'menulength']),
    ...mapWritableState(useMenuStore, ['page'])
  },
  methods: {
    ...mapActions(useMenuStore, ['fecthMenu']),
    nextpage() {
      console.log('<<<<<<< next page')
      this.page++
    },
    previospage() {
      console.log('<<<<<<< previous page')
      if (this.page > 1) {
        this.page--
      }
    }
  },
  watch: {
    page(val) {
      console.log(val)
      this.fecthMenu(val)
    }
  },
  created() {
    this.fecthMenu()
  }
}
</script>

<template>
  <div class="container">
    <Hero />

    <div class="row mt-4">
      <div class="col">
        <h2>Best<strong>Foods</strong></h2>
        <hr />
      </div>
    </div>

    <div class="row mb-3">
      <Card v-for="menu in menus" :key="menu.id" :menu="menu" />
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" @click.prevent="previospage">Previous</a>
        </li>
        <li class="page-item"><a class="page-link" href="#" @click.prevent="nextpage">Next</a></li>
      </ul>
    </nav>
  </div>
</template>
