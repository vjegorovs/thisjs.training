<template>
  <button @click="begin">{{ buttonmsg }}</button>
</template>

<script lang="ts">
import { computed, ref, inject, toRefs, ComputedRef } from "vue";

export default {
  setup(props, { emit }) {
    let buttonmsg: ComputedRef<string> = computed((): string =>
      inject("firstTime", true).firstTime === true ? "Begin" : "Resume"
    );
    const changeToMainView = inject("toggleView") as () => void;
    const begin = (): void => {
      emit("buttonPress");
      // figure out a way to have an alternative animation for "resume" mode since its too much to see it everytime

      changeToMainView();
    };
    return {
      buttonmsg,
      begin,
    };
  },
};
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
  border: 1px solid #e7e8ec;
  border-radius: 10px;
  width: 250px;
  height: 55px;
  background: #ffbc00;
  color: #ffffff;
  font-size: 30px;
  &:active {
    border: 0;
    outline: none;
  }
  &:focus {
    border: 0;
    outline: none;
  }
}
</style>
