<template>
  <div class="parent">
    <div class="question" :class="[inset]">
      <category-select v-if="!categorySelected" @loadCategory="loadCategory" />
      <div class="code" v-else>
        <code-format :current-question="codeText" :key="codeText"></code-format>
      </div>
    </div>
    <div class="selection-wrap" v-if="categorySelected">
      <transition name="fade" mode="out-in">
        <div class="selection">
          <h3>Question number: {{ currentQuestion.questionId }}</h3>
          <ul id="questionAnswers">
            <li v-for="(answer, index) in availableAnswers" :key="answer">
              <input type="checkbox" :id="index" v-model="selectedAnswers[index]" />
              {{ answer }}
            </li>
          </ul>
          <select-button
            v-if="currentQuestion"
            @nextQuestion="nextQuestionHandler"
            :current-question="currentQuestion"
            class="select-button"
          ></select-button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import SelectButton from "./SelectButton.vue";
import ComponentLoading from "./ComponentLoading.vue";
import CategorySelect from "./CategorySelect.vue";
import CodeFormat from "./CodeFormat.vue";
import {
  ref,
  Ref,
  computed,
  watchEffect,
  reactive,
  ComputedRef,
  onBeforeMount,
  onBeforeUpdate,
  watch,
  h,
} from "vue";
import { CategoryList } from "../enums/Categories";
import Question from "../utils/Question";
import { loadQuestionFromApi } from "../utils/ApiFetch";
import { deepSpread } from "../utils/deepSpread";

export default {
  components: { ComponentLoading, SelectButton, CategorySelect, CodeFormat },
  setup() {
    // catches the CategorySelect components emit re: selected category
    const loadCategory = (category: number): void => {
      categorySelected.value = !categorySelected.value;

      // figure out a better solution for the css property triggering
      inset.value = "inset";
      // later on provide the category into the loadquestionfromapi menthod as route param
    };

    const QuizList: Question[] = [];
    const categorySelected: Ref<boolean> = ref(false);
    const questionNumber: Ref<number> = ref(0);
    const inset: Ref<string> = ref("");
    const currentQuestion: Question = reactive({
      questionCode: "",
      questionId: 0,
      questionText: "",
      selectedAnswer: [],
      correctAnswer: 0,
      availableAnswers: [],
    });

    const availableAnswers = computed(
      (): string[] => currentQuestion.availableAnswers
    );
    const codeText = computed((): string => {
      return currentQuestion.questionCode;
    });
    const selectedAnswers = computed(
      (): boolean[] => currentQuestion.selectedAnswer
    );

    const nextQuestionHandler = (): void => {
      //#TODO-5: add angry button animation  with gsap when returning below
      if (
        currentQuestion.selectedAnswer.filter((selected) => selected === true)
          .length === 0
      ) {
        return;
      }
      // Questions are added to a local array to account for a scenario where the user
      // would want to go back a question
      // #TODO-6: implement back button + functionality
      QuizList.push(deepSpread(currentQuestion));

      questionNumber.value++;
      loadQuestionFromApi(currentQuestion, questionNumber);
    };

    // Preloading the first question
    onBeforeMount(() => {
      loadQuestionFromApi(currentQuestion, questionNumber);
    });

    return {
      codeText,
      currentQuestion,
      questionNumber,
      nextQuestionHandler,
      availableAnswers,
      selectedAnswers,
      categorySelected,
      loadCategory,
      inset,
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
}

.inset {
  background-color: #fafafa;
  box-shadow: inset 4px 4px 17px -6px rgba(0, 0, 0, 0.18);
}

.code {
  margin-left: 2%;
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.question {
  grid-area: 2 / 2 / 5 / 5;
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
  justify-content: flex-end;
}

.selection {
  height: 80%;
  width: 100%;
  > ul {
    height: 40%;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    > li {
      margin-top: 0.5em;
      padding: 0 25% 0 25%;
      list-style: none;
      text-align: left;
    }
  }
}
</style>
