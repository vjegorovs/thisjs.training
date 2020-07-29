<template>
  <div>
    <h3>{{ headerText}}</h3>
    <ul id="questionAnswers">
      <li v-for="answer in availableAnswers" :key="availableAnswers.indexOf(answer)">
        <input type="checkbox" @change="upd" />
        {{ answer }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { toRefs, computed } from "vue";

export default {
  props: { currentQuestion: Object },
  setup(props) {
    const { currentQuestion } = toRefs(props);
    function upd(ev) {
      console.log(ev.target.parentElement);
      console.log("yay");
    }
    const availableAnswers = computed(
      () => currentQuestion.value.availableAnswers
    );

    const selectedAnswer = computed(() => currentQuestion.value.selectedAnswer);
    const headerText = computed(
      () => `Question number ${currentQuestion.value.questionId}`
    ) as ComputedRef<String>;

    return {
      headerText,
      availableAnswers,
      selectedAnswer,
      upd
    };
  }
};
</script>

<style lang="scss" scoped></style>
