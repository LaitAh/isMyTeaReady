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
  <TeasList/>
</template>

<script>
import NavbarTop from './components/NavbarTop.vue'
import TeasList from './components/TeasList.vue'

export default {
  name: 'IsMyTeaReady',
  components: {
    NavbarTop,
    TeasList,
  }
}
</script>

<style>
#app {
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
}
</style>
