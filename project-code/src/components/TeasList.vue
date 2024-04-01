<!--
  This component represents the tea selection page, where users can view a list of available teas.

  Props:
    None
  Data:
    cards: An array of objects representing individual teas. Each object has the following properties:
      - title: The title of the tea.
      - description: A brief description of the tea.
      - imageUrl: The URL of the image representing the tea.
  Methods:
    None
  Components:
    TeaCard: A child component responsible for rendering an individual tea card.
  Scoped Styles:
    h1: Styles the heading for the tea selection page.
    .card-list: Styles the container for the list of tea cards.
    .card-wrapper: Styles the wrapper for each individual tea card.
    @media screen and (max-width: 767px): Styles applied when the screen width is less than or equal to 767px.
-->
<template>
  <h1>Select your tea</h1>
  <div class="card-list">
    <div v-for="(card, index) in cards.length" :key="index" class="card-wrapper">
      <template v-if="cards[index]">
        <TeaCard :title="cards[index].title" :description="cards[index].description" :imageUrl="cards[index].imageUrl" />
      </template>
    </div>
  </div>
</template>

<script>
  import TeaCard from './TeaCard.vue';

  export default {
    components: {
      TeaCard
    },
    data() {
      return {
        cards: [
          { title: 'Blue Mountain', description: 'Exquisite black tea with indulgent fruity notes of strawberry and flowers.', imageUrl: 'https://images.pexels.com/photos/9184612/pexels-photo-9184612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { title: 'Thé du Louvre - Courtyard Tea', description: 'An entrancing black tea with notes of citrus and blackberry.', imageUrl: 'https://images.pexels.com/photos/17942537/pexels-photo-17942537/free-photo-of-the-automne-pommes-de-pin-tasse-de-the.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { title: 'Organic Limoncha', description: 'A lemon and almond flavoured blend of green and black teas with Japanese influences.', imageUrl: 'https://images.pexels.com/photos/792613/pexels-photo-792613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { title: 'Organic Paris For You by Day', description: 'A delicious floral green tea with notes of rose, raspberry and lychee, like a delightful stroll through the streets of Paris.', imageUrl: 'https://images.pexels.com/photos/905485/pexels-photo-905485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { title: 'Organic Mint tea', description: 'Fresh and thirst-quenching Chinese green tea flavoured with mint leaves.', imageUrl: 'https://images.pexels.com/photos/3889844/pexels-photo-3889844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
          { title: 'Egyptian Night – Organic Louvre Infusion', description: 'A fresh and sweet infusion that combines peppermint, elderberries and blueberry. It evokes the mystery and opulence of Middle Eastern nights.', imageUrl: 'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        ]
      };
    }
  };
</script>

<style scoped>
  .card-list {
    display: flex;
    flex-wrap: wrap;
  }

  .card-wrapper {
    width: calc(25%);
    margin-bottom: 10px;
    text-align: center;
  }

  @media screen and (max-width: 767px) {
    .card-wrapper {
      width: calc(50%);
    }
  }
</style>
