// Create a new file called "index.html"
<template>
  <div id="app"></div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
/* Add any styles you want here */
</style>

<!-- Import the necessary libraries -->
<dom-module-id="my-fragment" ref="fragmentRef">

  <!-- Render and display the fragment using the "my-fragment" ID -->
  <div id="{{id}}"></div>

  <!-- Example of a button with an on click event handler -->
  <button @click="myFunction">Click me!</button>
</dom-module-id>

<script>
// Import any additional scripts you need
import { myFunction } from './my-fragment'

$(document).ready(function () {
  // Use the fragment to update the content in your "app" component
  $(this.$refs.fragmentRef).replaceWith($(this.$el))
})
</script>

<!-- Define a simple function -->
function myFunction() {
  console.log('Button clicked!');
}
