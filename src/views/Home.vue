<template>
  <div id="home">
     <img class="logo" src="../assets/logo.png" alt="logo" />

    <h1>👋Hello world🌎</h1>
    <VTitle />
  </div>
</template>

<script>
import VTitle from "../components/v-title";
export default {
  name: "Home",
  components: {
    VTitle
  }

}
</script>

<style scoped>

</style>