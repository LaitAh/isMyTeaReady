<!--
Description:
  This component represents a modal that notifies the user when the timer for their tea preparation has ended. It displays a message indicating that the tea is ready, along with a close button.
Template:
  - The template section contains HTML markup defining the structure of the modal.
  - It includes placeholders for dynamic data binding using Vue.js syntax.
  - The modal consists of a title, a close button, and a container for the message.
Script:
  - The script section contains JavaScript logic for controlling the behavior of the modal.
  - It defines a prop called closeOverlay, which is a function passed from the parent component to close the overlay when the modal is closed.
  - The data section manages the visibility of the modal.
  - The methods section includes functions to open and close the modal.
  - The open method sets the show property to true and plays an audio file when the modal is opened.
  - The close method sets the show property to false and calls the closeOverlay function provided by the parent component.
Style:
  - The style section contains scoped CSS for styling the modal component.
  - It defines the layout, appearance, and responsiveness of the modal.
  - The modal is centered horizontally on the screen.
  - It has a maximum width of 75vw for mobile screens and 50vw for screens larger than 768px.
Dependencies:
  - Vue.js
Usage:
  - This component should be used within a Vue.js application to display a modal notification when the timer for tea preparation ends.
  - It relies on data passed from the parent component to control its visibility and behavior.
-->

<template>
  <div class="modal" v-if="show">
    <div class="modal-content">
      <audio ref="audio" src="../assets/song-timerEnd.mp3" loop></audio>
      <h2>Time's up! Your tea is ready.</h2>
      <button class="close" @click="close">&times;</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    closeOverlay: {
      type: Function,
      default: () => {}
    }
  },

  data() {
    return {
      show: false
    };
  },
  methods: {
    open() {
      this.show = true;
      this.$nextTick(() => {
        this.$refs.audio.addEventListener('loadedmetadata', () => {
          this.$refs.audio.play();
        });
      });
    },
    close() {
      this.show = false;
      this.closeOverlay();
    }
  }
};
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
}

.modal-content {
  width: 75vw;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px;
  text-align: center;
}

h2 {
  padding: 10px;
}

button {
  width: 100%;
  padding: 0.25em 1em;
  background-color: #FF7A45;
  color: white;
  font-weight: 600;
  font-size: 2em;
  border: none;
}

@media screen and (min-width: 768px) {
  .modal-content {
    width: 50vw;
  }
}
</style>
  