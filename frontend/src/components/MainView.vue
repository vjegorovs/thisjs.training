<template>
  <div class="parent">
    <div class="question">{{ text }}</div>
    <div class="selection-wrap">
      <selection :current-question="currentQuestion" class="selection"></selection>
      <select-button
        @nextQuestion="questionNumber++"
        :current-question="currentQuestion"
        class="select-button"
      ></select-button>
    </div>
  </div>
</template>

<script lang="ts">
import Selection from "./Selection.vue";
import SelectButton from "./SelectButton.vue";
import { ref, computed, watchEffect, reactive } from "vue";
import Question from "../utils/Question";

export default {
  components: { Selection, SelectButton },
  setup() {
    const text: String = "now its in main view";
    let questionNumber = ref(0);

    const currentQuestion = computed(() => {
      return fetchQuestion(questionNumber);
    });

    const fetchQuestion = (questionNumber: Ref<number> = 0) => {
      // fetch from API
      console.log(questionNumber.value);
      if (questionNumber.value === 0) {
        const result: Question = {
          questionCode: { code: "prism code" }, // here something regarding highlight.js or prism.js
          questionId: 0,
          questionText: "question text",
          selectedAnswer: null,
          correctAnswer: 0,
          availableAnswers: ["sd", "bb"]
        };
        console.log(questionNumber.value);
        return reactive(result);
      } else {
        const result: Question = {
          questionCode: { code: "prism code" }, // here something regarding highlight.js or prism.js
          questionId: 9999,
          questionText: "question text",
          selectedAnswer: null,
          correctAnswer: 2,
          availableAnswers: ["karamba", "alarm"]
        };
        console.log(questionNumber.value);
        return reactive(result);
      }
    };

    return {
      text,
      currentQuestion,
      questionNumber
    };
  }
};
</script>

<style lang="scss" scoped>
.parent {
  display: grid;
  grid-template-columns: minmax(20px, 0.5fr) repeat(2, 1.1fr) 0.8fr minmax(
      20px,
      0.5fr
    );
  grid-template-rows: 0.2fr repeat(2, 1.4fr) 0.5fr 0.2fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 70vh;
  margin-top: 20px;
}

.question {
  grid-area: 2 / 2 / 5 / 5;
  box-shadow: inset 4px 4px 17px -6px rgba(0, 0, 0, 0.18);
  border-radius: 10px;
  padding: 3px 3px 3px 3px;
}
.selection-wrap {
  grid-area: 2 / 4 / 5 / 5;
  background: #ffffff;
  border: 1px solid #e7e8ec;
  box-shadow: 0px 4px 15px rgba(47, 49, 68, 0.320837);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.selection {
  height: 60%;
  width: 100%;
}
.select-button {
  margin-top: 30px;
}
</style>
