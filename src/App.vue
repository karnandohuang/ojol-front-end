<template>
  <div id="app">
    <Title/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Driver List</router-link> |
      <router-link to="/account">My Account</router-link> |
      <router-link to="/history">Booking History</router-link> |
      <router-link to="/payments">Payment Methods</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue'
  import BootstrapVue from 'bootstrap-vue';
  import 'bootstrap/dist/css/bootstrap.css';
  import 'bootstrap-vue/dist/bootstrap-vue.css';
  import AccountList from './views/AccountList';

  import Title from './components/Title';

  Vue.use(BootstrapVue);

  export default {
    components: {
      Title
    },
    props: ["accountIdFromRow"],
    data(){
      return {
        accountId : this.accountIdFromRow
      }
    }

  }
</script>

<style>
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
