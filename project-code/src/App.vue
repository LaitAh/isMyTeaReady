<!--
  This is the main component of the IsMyTeaReady application.

  Components:
    - NavbarTop: The top navigation bar component.
    - TeasList: The component for listing teas.
  Scoped Styles:
    #app: Styles for the root element of the application.
-->
<template>
  <NavbarTop/>
  <router-view></router-view>
</template>

<script>
import NavbarTop from './components/NavbarTop.vue'

export default {
  name: 'IsMyTeaReady',
  components: {
    NavbarTop,
  }
}
</script>

<style>
#app {
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
}

h1 {
    font-size: 1.5em;
    text-align: center;
}
</style>
