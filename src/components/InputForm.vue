

<template>
  <div class="formWrapper">
    <form class="logForm">
      <h3>Log Your Daily Activities and Meals</h3>
      <div class="row">
        <span class="label">Date:</span>
        <Datepicker v-model="values.date"></Datepicker>
      </div>
      <h3>Sleep</h3>
      <div class="row">
        <span class="label">Bedtime:</span>
        <input v-model="values.sleepStart" />
        <span class="label">Wakeup:</span>
        <input v-model="values.sleepEnd" />
      </div>
      <h3>Nutrition</h3>
      <div v-for="(item, idx) in values.nutrition" :key="idx" class="row">
        <span class="label">Food:</span>
        <textarea v-model="item.value"></textarea>
      </div>
      <button @click="addNutritionItem">+</button>
      <h3>Exercise</h3>
      <div v-for="(item, idx) in values.exercise" :key="idx" class="row">
        <span class="label">Workout:</span>
        <textarea v-model="item.value"></textarea>
      </div>
      <button @click="addExerciseItem">+</button>
      <button @click="saveLog(values)">Save</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import Datepicker from "vue3-datepicker";

export default {
  name: "InputForm",
  props: {
    formData: {
      type: Object,
      required: false,
    }
  },
  data() {
    return {
      values: {
        date: ref(null),
        sleepStart: null,
        sleepEnd: null,
        exercise: [],
        nutrition: [],
      },
    };
  },
  methods: {
    addNutritionItem() {
      this.values.nutrition.push({ value: "" });
    },
    addExerciseItem() {
      this.values.exercise.push({ value: "" });
    },
    saveLog() {
      this.$emit('saveLog', this.values);
    }
  },
  components: {
    Datepicker,
  },
};
</script>

<style scoped lang="scss">
.formWrapper {
  border: 1px solid grey;
  padding: 16px;
  margin: 16px;
}
.row {
  display: flex;
  align-items: center;
}

.label {
  margin-right: 8px;
}
</style>