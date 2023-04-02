<script>
import { mapActions } from 'pinia'
import { useMenuStore } from '../stores/counter'

export default {
  data() {
    return {
      inputlogin: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(useMenuStore, ['loginHandler', 'loginHandlerGoogle']),
    logingoogle({ credential }) {
      this.loginHandlerGoogle(credential)
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="card login-form">
      <div class="card-body">
        <h2 class="card-title">Login</h2>
        <h6 class="card-subtitle text-muted mb-5 fw-bold">Please login to use this site!</h6>

        <div class="d-grid mt-5 mb-4">
          <GoogleLogin :callback="logingoogle" prompt />
        </div>

        <h6 class="card-subtitle text-muted mb-4 text-center">or login with Email</h6>

        <form @submit.prevent="loginHandler(inputlogin)">
          <div class="mb-4">
            <label for="exampleInputEmail1" class="form-label">Email*</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Your Email"
              v-model="inputlogin.email"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password*</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Min 8 character"
              v-model="inputlogin.password"
            />
          </div>

          <div class="d-flex justify-content-between">
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            </div>
          </div>

          <div class="d-grid mt-5">
            <button type="submit" class="btn btn-success btn-login">Login</button>
          </div>

          <div class="mt-3">
            <label
              >Not registered yet ?
              <router-link to="/register" class="link">Create an account</router-link></label
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
body,
html {
  font-size: 12px;
  background-color: white;
  height: 100%;
  font-weight: 700;
}

.container {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.login-form {
  height: 500px;
  width: 430px;
  padding: 0 35px;
  background-color: white;
  border: none;
}

input[type='email'],
input[type='Number'],
input[type='text'],
input[type='password'] {
  border-radius: 20px;
  border: 2px solid rgb(224, 224, 224);
}

.btn-login {
  height: 35px;
  border-radius: 20px;
  font-weight: 700;
}

.link {
  color: #198754;
  text-decoration: none;
}

.link:hover {
  color: #198754;
  text-decoration: none;
}

.btn-gmail {
  height: 35px;
  border: 2px solid rgb(224, 224, 224);
  border-radius: 20px;
  font-weight: 700;
}

.img-google {
  height: 20px;
  width: 20px;
}
</style>
