<template>
  <div class="parent">
    <div class="question">{{ text }}</div>
    <selection class="selection"></selection>
    <select-button class="select-button"></select-button>
  </div>
</template>

<script lang="ts">
import Selection from "./Selection.vue";
import SelectButton from "./SelectButton.vue";

export default {
  components: { Selection, SelectButton },
  setup() {
    const text: String = "now its in main view";
    return {
      text,
    };
  },
};
</script>

<style lang="scss" scoped>
.parent {
  display: grid;
  grid-template-columns: 0.5fr repeat(3, 1fr) 0.5fr;
  grid-template-rows: 0.2fr repeat(2, 1fr) 0.5fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 60vh;
  margin-top: 20px;
}

.question {
  grid-area: 2 / 2 / 5 / 4;
}
.selection {
  grid-area: 2 / 4 / 4 / 5;
}
.select-button {
  grid-area: 4 / 4 / 5 / 5;
}
</style>
