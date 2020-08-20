<template>
  <button @click="nextQuestion()">{{ text }}</button>
</template>

<script lang="ts">
import { toRefs, defineComponent } from "vue";

export default defineComponent({
  props: { currentQuestion: Object },
  setup(props, { emit }) {
    const { currentQuestion } = toRefs(props);
    const text: String = "Next";
    const nextQuestion = (): void => {
      //here emit up the press event and switch q to next one
      emit("nextQuestion");
    };
    return {
      text,
      nextQuestion,
    };
  },
});
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
  border: 1px solid #e7e8ec;
  border-radius: 10px;
  width: 50%;
  height: 10%;
  background: #f1f2f7;
  color: #2f3144;
  font-size: 25px;
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
