<!--
  This is the main component of the IsMyTeaReady application.

  Components:
    - NavbarTop: The top navigation bar component.
  Scoped Styles:
    #app: Styles for the root element of the application.
-->
<template>
  <NavbarTop/>
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
</style>
