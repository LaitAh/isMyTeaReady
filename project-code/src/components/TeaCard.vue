<!--
Description:
  This component represents a card displaying brief information about a tea item. It includes an image, title, description, and a button to select the tea for detailed view.
Template:
  - The template section contains HTML markup that structures the layout of the tea card.
  - It includes placeholders for dynamic data binding using Vue.js syntax.
  - It defines a button for selecting the tea item.
Script:
  - The script section contains JavaScript logic for handling component functionality.
  - It imports the necessary functionalities from Vuex for managing state mutations.
  - The props section defines the properties expected by the component, such as imageUrl, title, description, and teaId.
  - The methods section includes a function to set the selected tea in the Vuex store and navigate to the detailed view of the selected tea.
Style:
  - The style section contains scoped CSS for styling the component.
  - It defines styles for the card layout, image, title, description, and button.
  - Hover styles for the button are also defined to provide visual feedback.
Dependencies:
  - Vue.js
  - Vuex
  - Vue Router
Usage:
  - This component should be used within a Vue.js application to display brief information about tea items in a card format.
  - It relies on data passed through props for displaying the tea details.
  - Selection of a tea item triggers navigation to the detailed view of the selected tea using Vue Router.
  - The selected tea information is stored in the Vuex store for access across the application.
-->
<template>
  <div class="card">
    <div class="image-container">
      <img :src="imageUrl" alt="Card image" class="card-image" />
    </div>
    <div class="content">
      <h2 class="title">{{ title }}</h2>
      <p class="description">{{ description }}</p>
      <button @click="selectCard">Select</button>
    </div>
  </div>
</template>
  
<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    imageUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    teaId: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapMutations(['setSelectedTea']),
    selectCard() {
      this.setSelectedTea(this.teaId);
      this.$router.push({ name: 'TeaDetail', params: { teaId: this.teaId } });
    }
  },
};
</script>

<style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    margin: 10px;
  }
  
  .image-container {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
  
  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .content {
    padding: 10px;
  }
  
  .title {
    font-size: 1.25em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-height: 50px;
  }
  
  .description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    max-height: 65px;
    min-height: 65px;
  }
  
  button {
    margin-top: 10px;
    padding: 0.75em 2em;
    background-color: #FF7A45;
    border: solid #FF7A45 1px;
    color: white;
    font-weight: 600;
    font-size: 1em;
    border-radius: 30px;
  }
  
  button:hover {
    background-color: white;
    color: #FF7A45;
  }
</style>
  