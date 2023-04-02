<script>
import { useMenuStore } from './stores/counter'
import { mapActions, mapState } from 'pinia'
import { RouterLink, RouterView } from 'vue-router'
export default {
  computed: {
    ...mapState(useMenuStore, ['access_token'])
  },
  methods: {
    ...mapActions(useMenuStore, ['logOut'])
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#">Resto</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" v-if="!access_token" class="nav-link">LogIn</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" v-if="!access_token" class="nav-link">Register</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/home" v-if="access_token" class="nav-link" @click="logOut()"
              >LogOut</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/keranjang" v-if="access_token" class="nav-link"
              >Keranjang <i class="fa-sharp fa-solid fa-bag-shopping"></i
            ></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
</template>
