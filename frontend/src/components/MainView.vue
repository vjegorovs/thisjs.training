<template>
  <div class="parent">
    <div class="question">{{ text }}</div>
    <transition name="fade" mode="out-in">
      <div class="selection-wrap">
        <component-loading v-if="!currentQuestion" />
        <div v-else class="selection">
          <h3>{{ headerText}}</h3>
          <ul id="questionAnswers">
            <li v-for="(answer, index) in availableAnswers" :key="answer">
              <input type="checkbox" :id="index" @change="upd(index)" />
              {{ answer }}
            </li>
          </ul>
        </div>
        <select-button
          v-if="currentQuestion"
          @nextQuestion="nextQuestionHandler"
          :current-question="currentQuestion"
          class="select-button"
        ></select-button>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import SelectButton from "./SelectButton.vue";
import ComponentLoading from "./ComponentLoading.vue";
import { ref, Ref, computed, watchEffect, reactive, ComputedRef } from "vue";
import Question from "../utils/Question";
import { fetchHttp } from "../utils/ApiFetch";

export default {
  components: { ComponentLoading, SelectButton },
  setup() {
    const QuizList: Question[] = [];
    const text: String = "now its in main view";
    const headerText: ComputedRef<String> = computed(
      () => `Question number ${currentQuestion.value.questionId}`
    );

    let questionNumber: Ref<Number> = ref(0);

    const nextQuestionHandler = (): void => {
      QuizList.push(currentQuestion.value);
      questionNumber.value++;
    };

    async function yaba() {
      const question = await fetchHttp<Question>().then(
        (result) => result.question
      );
      console.log("yeet", question);
      //const { question } = questionz;

      return question;
    }

    const currentQuestion = computed(
      (): Question => {
        // let lol;
        // setTimeout(() => {
        //   lol = fetchQuestion(window.fetch, questionNumber);
        // }, 5000);
        console.log(QuizList);
        // const questionTest: Promise<Question> = fetchHttp<Question>(
        //   window.fetch
        // );
        // const { question } = bruh; // aaaaaaaaaaaaaaaa
        // console.log(questionTest);
        const lala = yaba();
        return lala;
      }
    );

    const fetchQuestion = (fetch, questionNumber: Number = 0): Question => {
      // fetch from API

      console.log(questionNumber.value);
      if (questionNumber.value === 0) {
        const result: Question = {
          questionCode: { code: "prism code" }, // here something regarding highlight.js or prism.js
          questionId: 0,
          questionText: "question text",
          selectedAnswer: [],
          correctAnswer: 0,
          availableAnswers: ["sd", "bb"],
        };
        console.log(questionNumber.value);
        return reactive(result);
      } else {
        const result: Question = {
          questionCode: { code: "prism code" }, // here something regarding highlight.js or prism.js
          questionId: 9999,
          questionText: "question text",
          selectedAnswer: [],
          correctAnswer: 2,
          availableAnswers: ["karamba", "alarm"],
        };
        console.log(questionNumber.value);
        return reactive(result);
      }
    };

    const availableAnswers = computed(
      () => currentQuestion.value.availableAnswers
    );

    function upd(index) {
      // toggles true/false at the selected answer index
      currentQuestion.value.selectedAnswer[index] = !currentQuestion.value
        .selectedAnswer[index];
    }

    return {
      text,
      currentQuestion,
      questionNumber,
      nextQuestionHandler,
      headerText,
      availableAnswers,
      upd,
    };
  },
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
