<template>
  <div id="app">

    <app-header></app-header>


    <router-view></router-view>
   
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';
export default {
  name: 'App',
  components: {
    appHeader: Header,
    appFooter: Footer,
    appHome: Home
  }
}
</script>

<style>



</style>
