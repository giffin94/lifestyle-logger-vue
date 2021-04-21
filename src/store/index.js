import { createStore } from "vuex";
import axios from "axios";
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT,
  SAVE_LOG_REQUEST,
  SAVE_LOG_SUCCESS,
  SAVE_LOG_FAILURE,
} from "./mutation-types";

export default createStore({
  state: {
    currentUser: null,
    loggingIn: false,
    logInFailure: false,
    savingLog: false,
    logs: [],
  },
  mutations: {
    [LOG_IN_REQUEST](state) {
      state.loggingIn = true;
    },
    [LOG_IN_SUCCESS](state, user) {
      state.currentUser = user;
      state.loginFailure = false;
      state.loggingIn = false;
    },
    [LOG_IN_FAILURE](state) {
      state.loginFailure = true;
      state.loggingIn = false;
    },
    [LOG_OUT](state) {
      state.currentUser = null;
    },
    [SAVE_LOG_REQUEST](state) {
      state.savingLog = true;
    },
    [SAVE_LOG_SUCCESS](state, newLog) {
      state.savingLog = false;
      state.logs = [...state.logs, newLog];
    },
  },
  actions: {
    logIn({ commit, state }, user) {
      commit(LOG_IN_REQUEST);
      setTimeout(() => {
        // if (state.loginFailure) {
        commit(LOG_IN_SUCCESS, user);
        // } else {
        // commit(LOG_IN_FAILURE);
        // }
      }, 0);
    },
    logOut({ commit }) {
      commit(LOG_OUT);
    },
    createUser({ commit, state }, user) {
      commit(LOG_IN_REQUEST);
      axios
        .post(
          "http://127.0.0.1:8000/users/",
          { ...user },
          {
            headers: {
              Authorization: "Token 7decfe42e9a64666834deff01dc2ad78458ae0a2",
            },
          }
        )
        .then((resp) => console.log(resp));
      // setTimeout(() => {
      //   // if (state.loginFailure) {
      //     commit(LOG_IN_SUCCESS, user);
      //   // } else {
      //     // commit(LOG_IN_FAILURE);
      //   // }
      // }, 0);
    },
    saveLog({ commit }, newLog) {
      commit(SAVE_LOG_REQUEST);
      setTimeout(() => {
        commit(SAVE_LOG_SUCCESS, newLog);
      }, 1500);
    },
  },
  modules: {},
});
