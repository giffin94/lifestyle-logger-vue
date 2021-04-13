<template>
  <div class="home">
    <MainLanding msg="Welcome to Your Lifestyle Logger" />
  </div>
</template>

<script>
// @ is an alias to /src
import MainLanding from "@/components/MainLanding.vue";

export default {
  name: "Home",
  components: {
    MainLanding,
  }
};
</script>
