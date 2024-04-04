<!--
Description:
  This component represents the detailed view of a specific tea item. It displays information about the tea such as its title, image, description, suggestion of preparation, additional message, ingredients, and provides buttons for navigation and timer functionality.
Template:
  - The template section contains HTML markup that structures the layout of the tea detail view.
  - It includes placeholders for dynamic data binding using Vue.js syntax.
  - It also defines buttons for navigating back to the tea list and for starting a timer.
Script:
  - The script section contains JavaScript logic for fetching data and defining component methods.
  - It imports the necessary functionalities from Vuex for managing state.
  - The computed property retrieves the selected tea data from the Vuex store.
  - The methods section defines functions for navigating back to the tea list and handling the timer functionality (currently a placeholder).
  - In the created lifecycle hook, it retrieves the tea ID from the route parameters and logs it to the console.
Style:
  - The style section contains scoped CSS for styling the component.
  - It defines styles for the layout, images, text, buttons, and responsiveness.
Dependencies:
  - Vue.js
  - Vuex
  - Vue Router
Usage:
  - This component should be used within a Vue.js application to display detailed information about a selected tea item.
  - It relies on data stored in Vuex, accessed through getters and mutations.
  - Navigation between different views is handled by Vue Router.
-->

<template>
  <div class="tea-detail-container">
    <h1>{{ tea.title }}</h1>
    <div class="tea-detail">
      <img :src="tea.imageUrl" :alt="tea.title" class="tea-image" />
      <div class="tea-infos">
        <div v-if="tea.descriptionLong" class="descriptionLong">
          <h3 class="tea-descriptionLong-title title">Description</h3>
          <p class="tea-descriptionLong-text text" v-html="tea.descriptionLong"></p>
        </div>
        <div v-if="tea.suggestion" class="suggestion">
          <h3 class="tea-suggestion-title title">Suggestion of preparation</h3>
          <p class="tea-suggestion-text text">{{ tea.suggestion }}</p>
        </div>
        <div v-if="tea.other" class="other">
          <h3 class="tea-other-title title">Tea and dishes message</h3>
          <p class="tea-other-text text">{{ tea.other }}</p>
        </div>
        <div v-if="tea.ingredients" class="ingredients">
          <h3 class="tea-ingredients-title title">Tea ingredients</h3>
          <p class="tea-ingredients-text text">{{ tea.ingredients }}</p>
        </div>
      </div>
    </div>
    <div class="tea-button">
      <button @click="backTeas" class="button-return">←</button>
      <template v-if="!timerRunning">
        <button @click="startTimer">Start Timer</button>
      </template>
      <template v-else>
        <button>{{ timeRemainingText }}</button>
      </template>
    </div>
    <ModalTimerEnd ref="modal" :closeOverlay="closeOverlay" />
    <div class="overlay" v-if="showModal"></div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import ModalTimerEnd from './ModalTimerEnd.vue';

export default {
  components: {
    ModalTimerEnd
  },
  data() {
    return {
      timeRemaining: 1, // Time in seconds
      timerRunning: false,
      timerInterval: null,
      showModal: false,
    };
  },
  computed: {
    ...mapGetters(['selectedTea']),
    tea() {
      return this.selectedTea;
    },
    timeRemainingText() {
      const minutes = Math.floor(this.selectedTea.brewingTime / 60);
      const seconds = this.selectedTea.brewingTime % 60;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  },
  methods: {
    backTeas() {
      this.$router.go(-1);
    },
    startTimer() {
      this.timerRunning = true;
      this.timerInterval = setInterval(() => {
        this.selectedTea.brewingTime--;
        if (this.selectedTea.brewingTime <= 0) {
          clearInterval(this.timerInterval);
          this.timerRunning = false;
          if (this.$refs.modal) {
            this.showModal = true;
            this.$refs.modal.open();
          }
        }
      }, 1000);
    },
    closeOverlay() {
      this.showModal = false;
    },
  },
  created() {
    const teaId = this.$route.params.teaId;
    console.log("Tea ID: ", teaId);
  }
};
</script>

<style scoped>
.tea-detail-container {
  position: relative;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 999;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}

.tea-infos {
  display: flex;
  flex-direction: column;
}

.tea-detail {
  padding: 0 20px;
}

.tea-image {
  max-width: 100%;
  border-radius: 10px;
}

.tea-infos > div:not(:last-child) {
  border-bottom: 2px solid #A2DB68;
}

.tea-button {
  display: flex;
  justify-content: center;
}

button {
  margin: 5px;
  padding: 0.75em 2em;
  background-color: #FF7A45;
  color: white;
  font-weight: 600;
  font-size: 1em;
  border: none;
  border-radius: 30px;
}

.button-return {
  background-color: white;
  color: #FF7A45;
  border: 1px solid #FF7A45;
  padding: 0.75em 1em;
}

@media screen and (min-width: 768px) {
  .title, .text {
    margin: 0px;
    padding: 0px;
  }

  .text {
    margin-bottom: 1em;
  }

  .tea-detail {
    display: flex;
  }

  .tea-image {
    object-fit: cover;
    margin-right: 20px;
    width: 33%;
  }

  .tea-infos {
    justify-content: space-between;
  }

  .tea-infos > div:not(:first-child) {
    padding-top: 10px;
  }

  .tea-ingredients-text {
    margin-bottom: 0px;
  }

  .tea-button {
    margin-top: 20px;
  }
}
</style>
