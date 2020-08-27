<template>
  <button @click="nextQuestion()">{{ text }}</button>
</template>

<script lang="ts">
import { toRefs, defineComponent } from "vue";
import {} from "../utils/Question";
import Question from "../../../backend/src/questions/Question";

export default defineComponent({
  props: { currentQuestion: Object },
  setup(props, { emit }) {
    // ---
    // For potential future functionality implementation
    const { currentQuestion } = toRefs(props) as { currentQuestion: Object };
    const text: String = "Next";
    // ---
    const nextQuestion = (): void => {
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
  width: 80%;
  height: 2em;
  background: #ffbc00;
  color: #ffffff;
  font-size: 2em;
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
