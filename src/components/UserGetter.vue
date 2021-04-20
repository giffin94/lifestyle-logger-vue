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
          headers: {
            Authorization: "Token 31b6debb8348fbf9f4aed9a46c7a2917590c65a5",
          },
        })
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>