<!--
Description:
  This component serves as the main layout for the "Is My Tea Ready" application. It includes a top navigation bar and a router view for rendering different pages based on the current route.
Template:
  - The template section includes the `<NavbarTop>` component and a `<router-view>`, which serves as a placeholder for rendering the content of the current route.
  - It provides the layout structure for the application, with the navigation bar displayed at the top and the dynamic content rendered below it.
Script:
  - The script section imports the `NavbarTop` component and defines the `IsMyTeaReady` component.
  - It sets the name of the component to 'IsMyTeaReady' and registers the `NavbarTop` component as a child component.
  - This component serves as the main entry point for the application and includes the necessary components for layout and navigation.
Style:
  - The style section contains CSS rules for styling the application.
  - It sets the font family for the entire application to 'Nunito' or fallback fonts.
  - Additionally, it defines styles for `<h1>` elements, setting the font size to 1.5em and center-aligning the text.
Dependencies:
  - Vue.js
Usage:
  - This component should be used as the main layout for the "Is My Tea Ready" application.
  - It includes the necessary structure for rendering different pages/components and provides navigation functionality through the `<NavbarTop>` component.
  - Other components/pages of the application can be nested within the `<router-view>` tag to render their content within this layout.
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
