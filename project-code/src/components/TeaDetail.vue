<template>
  <h1>{{ tea.name }}</h1>
  <div class="tea-detail">
    <img :src="tea.imageUrl" :alt="tea.name" class="tea-image" />
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
    <button @click="backTeas" class="button-return">
      ←
    </button>
    <button @click="timer">Start timer</button>
  </div>
</template>


<script>
export default {
  props: {
    title: String,
    description: String,
    imageUrl: String,
    teaBrewingTime: Number,
    descriptionLong: String,
    suggestion: String,
    other: String,
    ingredients: String
  },
  created() {
    console.log(this.$route);
    console.log('Données du thé :', {
      name: this.$route.params.teaName,
      imageUrl: this.$route.params.teaImageUrl,
      descriptionLong: this.$route.params.teaDescriptionLong,
      suggestion: this.$route.params.teaSuggestion,
      other: this.$route.params.teaOther,
      ingredients: this.$route.params.teaIngredients,
    });
    this.tea = {
      name: this.$route.params.teaName,
      imageUrl: this.$route.params.teaImageUrl,
      brewingTime : this.$route.params.teaBrewingTime,
      description: this.$route.params.teaDescription,
      descriptionLong: this.$route.params.teaDescriptionLong,
      suggestion: this.$route.params.teaSuggestion,
      other: this.$route.params.teaOther,
      ingredients: this.$route.params.teaIngredients,
    }
  },
  methods: {
      backTeas() {
        this.$router.push('/');
      },
      timer() {

      }
    }
};
</script>

<style scoped>
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
