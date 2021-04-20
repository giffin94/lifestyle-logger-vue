<template>
  <button v-on:click="fetchUserData">Click for Users</button>
</template>

<script>
import axios from "axios";

export default {
  name: "UserGetter",
  methods: {
    fetchUserData() {
      axios
        .get("http://127.0.0.1:8000/users/", {
          headers: { "Acccess-Control-Allow-Origin": "*" },
        })
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>