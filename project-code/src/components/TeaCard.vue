<!--
  This component represents a card displaying information about a tea.

  Props:
    title: The title of the tea.
    description: A brief description of the tea.
    imageUrl: The URL of the image representing the tea.
  Methods:
    selectCard: Method triggered when the "Select" button is clicked. It navigates to the details page of the selected tea.
  Scoped Styles:
    .card: Styles the container for the tea card.
    .image-container: Styles the container for the tea image.
    .card-image: Styles the tea image within the card.
    .content: Styles the content section of the card, including title, description, and button.
    .title: Styles the title of the tea.
    .description: Styles the description of the tea.
    button: Styles the "Select" button.
    button:hover: Styles the "Select" button on hover.
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
  export default {
    props: {
      title: String,
      description: String,
      brewingTime: Number,
      imageUrl: String,
      descriptionLong: String,
      suggestion: String,
      other: String,
      ingredients: String
    },
    methods: {
      selectCard() {
        this.$router.push({
          name: 'TeaDetail',
          params: {
            teaName: this.title,
            teaDescription: this.description,
            teaBrewingTime: this.brewingTime,
            teaImageUrl: this.imageUrl,
            teaDescriptionLong: this.descriptionLong,
            teaSuggestion: this.suggestion,
            teaOther: this.other,
            teaIngredients: this.ingredients
          }
        });
      }
    }
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
  