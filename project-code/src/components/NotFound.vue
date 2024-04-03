<!-- 
Description:
  This component represents a 404 Not Found page, displayed when a user navigates to a non-existent route.
Template:
  - The template section contains HTML markup for displaying the message "Page not found" along with a 404 error code and a brief description.
  - It uses semantic HTML elements for structure and readability.
Script:
  - The script section is empty as there is no JavaScript functionality required for this component.
Style:
  - The style section contains scoped CSS for styling the component.
  - It applies styles to center align the content and adjust font sizes based on screen width.
  - The 404 error message is styled to be large and bold for emphasis, with a distinct color (#FF7A45).
  - The description text is styled with a slightly smaller font size and increased font weight for clarity.
Dependencies:
  - Vue.js
Usage:
  - This component should be used within a Vue.js application to handle 404 Not Found errors.
  - It is automatically rendered when a user navigates to a route that does not exist within the application.
  - The component provides a user-friendly message to inform users about the missing page and guide them accordingly.
-->
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
  