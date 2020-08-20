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
        <component-loading v-if="!loaded" />
        <div v-else class="selection">
          <h3>Question number: {{ currentQuestion.questionId }}</h3>
          <ul id="questionAnswers">
            <li v-for="(answer, index) in availableAnswers" :key="answer">
              <input
                type="checkbox"
                :id="index"
                v-model="selectedAnswers[index]"
              />
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
import { CategoryList } from "../enums/Categories";
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
import Question from "../utils/Question";
import { loadQuestionFromApi } from "../utils/ApiFetch";

export default {
  components: { ComponentLoading, SelectButton, CategorySelect, CodeFormat },
  setup() {
    const QuizList: Question[] = [];
    const categorySelected: Ref<Boolean> = ref(false);
    const inset: Ref<string> = ref("");

    const loadCategory = (category: number): void => {
      categorySelected.value = !categorySelected.value;
      inset.value = "inset";
      // later on provide the category into the loadquestionfromapi menthod as route param
    };

    const questionNumber = ref(0);

    const nextQuestionHandler = (): void => {
      // add check if not selected any answers -> button angry animation and return
      if (
        currentQuestion.selectedAnswer.filter((selected) => selected === true)
          .length === 0
      )
        return;
      QuizList.push({ ...currentQuestion });
      console.log(QuizList);
      questionNumber.value++;
      loadQuestionFromApi(currentQuestion, questionNumber);

      //console.log(currentQuestion);
    };

    const loaded: Ref<Boolean> = ref(false); // implement loading spinner before the first question is loading!!

    const currentQuestion: Question = reactive({
      questionCode: "",
      questionId: 0,
      questionText: "",
      selectedAnswer: [],
      correctAnswer: 0,
      availableAnswers: [],
    });

    const availableAnswers = computed(() => currentQuestion.availableAnswers);
    const codeText = computed(() => {
      console.log("changed codse!");
      return currentQuestion.questionCode;
    });
    const selectedAnswers = computed(() => currentQuestion.selectedAnswer);

    // watch(codeText, () => {
    //   console.log("codetext changed");
    //   console.log(currentQuestion.questionCode);
    // });
    onBeforeMount(() => {
      //settimeout to mock bad loading here

      setTimeout(() => {
        loadQuestionFromApi(currentQuestion, questionNumber);
        loaded.value = !loaded.value;
      }, 1000);
    });

    return {
      codeText,
      currentQuestion,
      questionNumber,
      nextQuestionHandler,
      availableAnswers,
      selectedAnswers,
      loaded,
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
  margin-top: 20px;
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
  }
}
.select-button {
  height: 3rem;
}
</style>
