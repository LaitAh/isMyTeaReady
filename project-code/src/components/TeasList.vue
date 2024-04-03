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
        <TeaCard 
          :title="cards[index].title" 
          :description="cards[index].description" 
          :imageUrl="cards[index].imageUrl"
          :teaId="cards[index]" 
        />
      </template>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  import TeaCard from './TeaCard.vue';

  export default {
    components: {
      TeaCard
    },
    data() {
      return {
        cards: [
          { 
            title: 'Blue Mountain', 
            description: 'Exquisite black tea with indulgent fruity notes of strawberry and flowers.', 
            imageUrl: 'https://images.pexels.com/photos/9184612/pexels-photo-9184612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            brewingTime: 5,
            descriptionLong: 'Exclusive to Palais des Thés, Blue Mountain is a gourmet, fruity blend. Its notes invoke honey, lavender, cornflower, strawberries and rhubarb, and complement one another alongside the intensity of black tea. <br/>An ideal tea for an afternoon tea break, it has a very round texture which brings out its gourmet flavours. <br/>It also tastes great as an iced tea!',
            suggestion: 'Take 6 g of tea leaves per 30 cl of water and heat to 95°C. Leave to infuse for 4 to 5 minutes.',
            other: 'Give in to indulgence with Blue Mountain tea! Its sweet, floral notes are in perfect counterpoint to dark chocolate.',
            ingredients: 'black tea (India, China, Sri Lanka) (95%), flavours (including strawberry) (4%), cornflower (1%).', 
          },
          { 
            title: 'Thé du Louvre - Courtyard Tea', 
            description: 'An entrancing black tea with notes of citrus and blackberry.', 
            imageUrl: 'https://images.pexels.com/photos/17942537/pexels-photo-17942537/free-photo-of-the-automne-pommes-de-pin-tasse-de-the.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            brewingTime: 5,
            descriptionLong: 'The fruit of a collaboration between the Louvre Museum and Palais des Thés, the thés du Louvre are fragrant new blends which pay homage to the two faces of the Louvre: the monumental aspect of the palace with its elegant architecture and the poetic charm of the Tuileries Garden. <br/>The Thé du Louvre - Courtyard Tea is an original creation that celebrates an exceptional place steeped in the history of France and the universal history of art, from the fortress of Philip Augustus to Pei’s pyramid. <br/>An enchanting black tea with notes of citrus fruits and wild blackberry, offering a rounded elegant touch.',
            suggestion: 'Take 16 g of tea leaves for 1 l of water and heat to 90°. Leave to infuse for 4 minutes.',
            other: '',
            ingredients: 'black tea (Sri Lanka, India, China) (95%), flavours (forest fruits 2%, bergamot 2%), cornflower petals.',
          },
          { 
            title: 'Organic Limoncha', 
            description: 'A lemon and almond flavoured blend of green and black teas with Japanese influences.', 
            imageUrl: 'https://images.pexels.com/photos/792613/pexels-photo-792613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            brewingTime: 5,
            descriptionLong: 'Limoncha is a blend of green and black teas with Japanese influences. Its roasted rice flavours blend perfectly with almond and lemon notes.',
            suggestion: 'Steep 8g (0.21OZ) in 50cl of filtered water at 80°C – 175°F during 3 minutes.',
            other: 'Tips from our Tea Sommeliers: a cup of Limoncha goes perfectly with a raspberry tartlet.',
            ingredients: 'Green tea* (China) (45%), black tea*(China) (44%), roasted rice* (8%), natural cream flavouring* (milk), lemon essential oil* (1%), natural almond flavouring (0.6%).', 
          },
          { 
            title: 'Organic Paris For You by Day', 
            description: 'A delicious floral green tea with notes of rose, raspberry and lychee, like a delightful stroll through the streets of Paris.', 
            imageUrl: 'https://images.pexels.com/photos/905485/pexels-photo-905485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            brewingTime: 5,
            descriptionLong: 'Paris for you by day is a delicious floral green tea with notes of rose, raspberry and lychee, like a delightful stroll through the streets of Paris.',
            suggestion: 'Steep 8g (0.21OZ) in 50cl of filtered water at 80°C – 175°F during 3 minutes.',
            other: 'Tips from our Tea Sommeliers: a cup of Paris for you by day goes perfectly with a pear almond tart.',
            ingredients: 'Green tea* (China) (89%), natural rose flavour, rose* (2%) and marigold* petals, raspberry* (2%), natural lychee and bergamot flavours.', 
          },
          { 
            title: 'Organic Mint tea', 
            description: 'Fresh and thirst-quenching Chinese green tea flavoured with mint leaves.', 
            imageUrl: 'https://images.pexels.com/photos/3889844/pexels-photo-3889844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            brewingTime: 5,
            descriptionLong: 'Green tea with mint is a green tea from China flavored with mint leaves. This refreshing, thirst-quenching beverage is the ultimate Moroccan mint tea. <br/>In Morocco but also in many other Arab countries, serving mint tea has become part of the rulebook for good living and represents the most refined expression of hospitality.',
            suggestion: '',
            other: '',
            ingredients: 'Green tea* (China) (50%), nana mint* (50%).', 
          },
          { 
            title: 'Egyptian Night – Organic Louvre Infusion', 
            description: 'A fresh and sweet infusion that combines peppermint, elderberries and blueberry. It evokes the mystery and opulence of Middle Eastern nights.', 
            imageUrl: 'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            brewingTime: 5,
            descriptionLong: 'The Louvre Infusions are inspired by the ancient civilisations that spawned the museum\'s most iconic exhibitions. <br/>With Egyptian Night, enjoy a subtle and fragrant infusion that evokes the mystery and opulence of oriental nights. Notes of peppermint, elderberries and blueberry soothe the intense heat of the day and charmingly signal the beginning of the oriental night, delicately spiced with a hint of fennel. <br/>This caffeine-free infusion is grown organically and certified by Ecocert, an accredited independent certification body.',
            suggestion: 'Infuse 15g in 1L of water at 85°C for 4 min.',
            other: '',
            ingredients: 'peppermint* (30%), apple*, chokeberries*, elderberries* (19%), fennel*, lemongrass*, natural blueberry flavour, blueberry* (1%), cornflower petals*.', 
          },
        ]
      };
    },
    methods: {
      ...mapMutations(['setSelectedTea']),
      selectCard(tea) {
        this.setSelectedTea(tea);
        this.$router.push({ name: 'TeaDetail', params: { teaName: tea.title } });
      }
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
