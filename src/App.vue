<template lang="pug">
#app
  Header
  .content
    router-view
  Footer
</template>

<script>
import "animate.css";
import "@fortawesome/fontawesome-free/js/all";

import "./assets/scss/style.scss";

import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer'

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
</style>
