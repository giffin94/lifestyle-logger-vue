

<template>
  <div>Date: {{ logData.date }}</div>
  <div>Bedtime: {{ logData.sleepStart }}</div>
  <div>Wakeup: {{ logData.sleepEnd }}</div>
  <h3>nutrition</h3>
  <p v-for="({ value }, idx) in logData.nutrition" :key="idx">{{ value }}</p>
  <h3>Exercise</h3>
  <p v-for="({ value }, idx) in logData.exercise" :key="idx">{{ value }}</p>
</template>

<script>
export default {
  name: "DisplayLog",
  props: {
    logData: {
      type: Object,
      required: true,
    },
  },
  methods: {},
};
</script>

<style scoped lang="scss">
</style>