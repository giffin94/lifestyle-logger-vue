

<template>
  <div class="mainWrapper">
    <h1>{{ msg }}</h1>
    <button v-on:click="logIn" v-if="!currentUser && !loggingIn">Log In</button>
    <p class="loginFailure" v-show="!currentUser && !loggingIn && loginFailure">
      Login Failed, Try again
    </p>
    <button
      class="addBtn"
      v-on:click="showInputForm"
      v-show="currentUser && !inputFormVisible"
    >
      +
    </button>
    <InputForm @saveLog="onSaveLog" v-show="inputFormVisible"></InputForm>
    <button v-on:click="logOut" v-if="currentUser && !loggingIn">
      Log Out
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import InputForm from "@/components/InputForm";

export default {
  name: "MainLanding",
  data() {
    return {
      inputFormVisible: false,
    };
  },
  props: {
    msg: String,
  },
  methods: {
    logIn() {
      this.$store.dispatch("logIn", { user: "Aedan" });
    },
    logOut() {
      this.$store.dispatch("logOut");
    },
    showInputForm() {
      this.inputFormVisible = true;
      console.log(this.logs);
    },
    onSaveLog(newLog) {
      this.$store.dispatch("saveLog", newLog);
      this.inputFormVisible = false;
    },
  },
  computed: mapState({
    currentUser: (state) => state.currentUser,
    loggingIn: (state) => state.loggingIn,
    loginFailure: (state) => state.loginFailure,
    savingLog: (state) => state.savingLog,
    logs: (state) => state.logs,
  }),
  components: {
    InputForm,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mainWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.loginFailure {
  color: red;
}

.addBtn {
  width: 80px;
  height: 80px;
  font-size: 50px;
  font-weight: 800;
  margin: 20px;
}
</style>
