<!--
  This component represents the navigation bar of the application.

  Data:
    companyName: The name of the company or application.
  Methods:
    toggleMenu: Toggles the visibility of the navigation menu on mobile devices.
    checkMobile: Checks if the current device is a mobile device.
  Scoped Styles:
    .navbar: Styles the container for the navigation bar.
    .navbar-brand: Styles the brand name of the application.
    .toggle-icon: Styles the toggle icon for the mobile menu.
    .burger-lines: Styles the lines of the burger icon.
    .close-icon: Styles the close icon for the mobile menu.
    .navbar-menu: Styles the container for the navigation menu.
    .navbar-menu.is-active: Styles the active state of the navigation menu on mobile.
    .navbar-element: Styles the individual elements in the navigation menu.
    @media screen and (max-width: 768px): Media query for styling on mobile devices.
-->
<template>
  <nav>
    <div class="navbar">
      <div class="navbar-brand">
        <span>{{ companyName }}</span>
      </div>
      <!-- Affichage de l'icône du menu burger ou de la croix -->
      <div v-if="isMobile" class="toggle-icon" @click="toggleMenu">
        <div v-if="!isMenuActive" class="burger-lines"></div>
        <div v-if="!isMenuActive" class="burger-lines"></div>
        <div v-if="!isMenuActive" class="burger-lines"></div>
        <div v-else class="close-icon"></div>
      </div>
      <!-- Menu des liens de navigation -->
      <div class="navbar-menu" :class="{ 'is-active': isMenuActive && isMobile }">
        <router-link class="navbar-element" to="/">Select a tea</router-link>
        <router-link class="navbar-element" to="/about">About</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      companyName: "Is My Tea Ready",
      isMenuActive: false,
      isMobile: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    }
  },
  mounted() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile);
  }
};
</script>

<style>
  .navbar {
    background-color: #A2DB68;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    color: white;
    font-weight: bold;
    position: relative;
  }

  .navbar-brand {
    font-size: 1.5em;
  }

  .toggle-icon {
    cursor: pointer;
  }

  .burger-lines {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 5px;
  }

  .close-icon {
    width: 25px;
    height: 25px;
    background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3E%3Cpath fill="%23fff" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/%3E%3C/svg%3E');
    background-repeat: no-repeat;
    background-size: 100%;
    cursor: pointer;
  }

  .navbar-menu {
    display: flex;
  }

  .navbar-element {
    margin-left: 1em;
  }

  .navbar-element:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    .toggle-icon {
      display: block;
    }

    .navbar-menu {
      display: none;
      flex-direction: column;
      position: absolute;
      top: calc(100%);
      left: 0;
      background-color: #A2DB68;
      width: 100%;
      padding: 1em;
    }

    .navbar-menu.is-active {
      display: flex;
      align-items: center;
    }

    .navbar-element {
      margin: 0;
      margin-bottom: 1em;
    }
  }
</style>
