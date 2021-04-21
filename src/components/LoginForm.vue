

<template>
  <div>
    <div v-if="!newUserVariant">
      <h3>Log In</h3>
      <div class="row">
        <span class="label">Email:</span>
        <input v-model="userData.email" />
        <span class="label">Password:</span>
        <input v-model="userData.password" type="password" />
      </div>
    </div>
    <div v-else>
      <h3>Create Account</h3>
      <div class="row">
        <span class="label">Email:</span>
        <input v-model="userData.email" />
        <span class="label">Username:</span>
        <input v-model="userData.username" />
      </div>
      <div class="row">
        <span class="label">Password:</span>
        <input v-model="userData.password" type="password" />
        <span class="label">Confirm Password:</span>
        <input v-model="userData.password2" type="password" />
      </div>
    </div>
    <button @click="submitUserInfo">Submit</button>
    <button @click="toggleNewUserForm">
      {{ newUserVariant ? "Log In" : "Create Account" }}
    </button>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  props: {},
  data() {
    return {
      userData: {
        email: "",
        username: "",
        password: "",
        password2: "",
      },
      newUserVariant: false,
    };
  },
  methods: {
    toggleNewUserForm() {
      this.newUserVariant = !this.newUserVariant;
    },
    submitUserInfo() {
      if (this.newUserVariant) {
        this.$emit("submitNewUser", this.userData);
      } else {
        this.$emit("submitUserLogin", {
          email: this.userData.email,
          password: this.userData.password,
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.row {
  display: flex;
  align-items: center;
}

.label {
  margin-right: 8px;
}
</style>