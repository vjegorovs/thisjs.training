import { Ref, ComputedRef } from "vue";
import Question from "./Question";

const fetchHttp = async <T>(
  fetchMethod = window.fetch,
  url: string = "http://localhost:3333/2",
  headers: {} = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  },
  ...params
): Promise<T> => {
  const response = await fetchMethod(url, headers);
  const body: Promise<T> = await response.json();

  return body;
};

export const loadQuestionFromApi = async (
  currentQuestion: Question,
  questionNumber: Ref<number>
): Promise<void> => {
  const question = await fetchHttp<{ message: string; question: Question }>(
    window.fetch,
    `http://localhost:3333/${questionNumber.value}`
  ).then((data) => {
    currentQuestion.questionCode = data.question.questionCode;
    currentQuestion.questionId = data.question.questionId;
    currentQuestion.questionText = data.question.questionText;
    currentQuestion.selectedAnswer = data.question.selectedAnswer;
    currentQuestion.correctAnswer = data.question.correctAnswer;
    currentQuestion.availableAnswers = data.question.availableAnswers;
  });
};
