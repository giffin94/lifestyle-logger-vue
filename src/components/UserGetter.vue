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
            Authorization: "Token 7decfe42e9a64666834deff01dc2ad78458ae0a2",
            // Authorization: "Token 1ae256c8d890bcaa2bf7e81f5c424be504116093",
          },
        })
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>