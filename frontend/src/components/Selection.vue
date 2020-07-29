<template>
  <div>
    <h3>{{ questionNumber }}</h3>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    const questionNumber: String = "Question number 7";
    return {
      questionNumber,
    };
  },
};
</script>

<style lang="scss" scoped></style>
