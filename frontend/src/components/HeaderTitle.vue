<template>
  <div class="center">
    <h1>This<span :style="style">JS</span>.training</h1>
  </div>
</template>

<script lang="ts">
import { computed, inject, toRefs, ref } from "vue";

export default {
  data() {
    const coordinates = inject("mouseCoordinates", { x: 1, y: 1 });

    const style = computed(
      () =>
        `background: -webkit-linear-gradient(${
          coordinates.x - coordinates.y
        }deg, rgba(255,188,0,1), rgba(240,132,0,1) 79.71%);
       -webkit-background-clip: text;
       -webkit-text-fill-color: transparent;
       `
    );
    return {
      style,
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: 42px;
  line-height: 43px;
  font-weight: 800;
  color: #2f3144;
  cursor: pointer;
  &:hover,
  :focus,
  :active {
    color: #ffbc00;
  }
}
span {
  font-size: 1.5em;
}
.center {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
}
</style>
