<!-- NotFound.vue -->
<template>
  <div>
    <h1>Page not found</h1>
    <h2>404</h2>
    <p>Although it's not a teapot, unfortunately, the page you're seeking isn't here.</p>
  </div>
</template>

<script>
export default {
  // No JavaScript functionality is required for this component
}
</script>

<style scoped>
div {
  text-align: center;
}

h2 {
  line-height: 1;
  color: #FF7A45;
  margin: 0;
  font-weight: 900;
  font-size: 8em;
}

p {
  font-weight: 600;
  margin: 0;
}
@media screen and (min-width: 768px) {
  h2 {
    font-size: 15em;
  }
  
  p {
    font-size: 1.25em;
  }
}
</style>
  