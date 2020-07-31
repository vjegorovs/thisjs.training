<template>
  <div>
    <h3>{{ headerText}}</h3>
    <ul id="questionAnswers">
      <li v-for="(answer, index) in availableAnswers" :key="answer">
        <input type="checkbox" :id="index" @change="upd(index)" />
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
    function upd(index) {
      console.log(currentQuestion.value.selectedAnswer[index]);
      currentQuestion.value.selectedAnswer[index] = !currentQuestion.value
        .selectedAnswer[index];
      //console.log(ev.target.parentElement.index);
      console.log(currentQuestion.value.selectedAnswer[index]);
      console.log(currentQuestion);
    }
    const availableAnswers = computed(
      () => currentQuestion.value.availableAnswers
    );

    //const selectedAnswer = computed(() => currentQuestion.value.selectedAnswer);
    const headerText = computed(
      () => `Question number ${currentQuestion.value.questionId}`
    ) as ComputedRef<String>;

    return {
      headerText,
      availableAnswers,
      upd
    };
  }
};
</script>

<style lang="scss" scoped></style>
