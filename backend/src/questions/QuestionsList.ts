import Question from "./Question";

export function yieldQuestion(requestId: number): Question {
  return QuestionsList[requestId];
}

const QuestionsList: Question[] = [
  {
    questionCode: {},
    questionId: 0,
    questionText: "The text for question number 0",
    selectedAnswer: [],
    correctAnswer: 0,
    availableAnswers: ["first Answer", "second answer", "ThIrD AnSwEr"],
  },
  {
    questionCode: {},
    questionId: 1,
    questionText: "The text for question number 1",
    selectedAnswer: [],
    correctAnswer: 1,
    availableAnswers: [
      "first Answer",
      "second answer",
      "ThIrD AnSwEr",
      "fourth answer",
    ],
  },
  {
    questionCode: {},
    questionId: 2,
    questionText: "The text for question number 2",
    selectedAnswer: [],
    correctAnswer: 2,
    availableAnswers: [
      "first Answer",
      "second answer",
      "ThIrD AnSwEr",
      "banana?",
    ],
  },
  {
    questionCode: {},
    questionId: 3,
    questionText: "The text for question number 3",
    selectedAnswer: [],
    correctAnswer: 2,
    availableAnswers: [
      "first Answer",
      "second answer",
      "ThIrD AnSwEr",
      "apple cider",
    ],
  },
  {
    questionCode: {},
    questionId: 4,
    questionText: "The text for question number 4",
    selectedAnswer: [],
    correctAnswer: 3,
    availableAnswers: [
      "first Answer",
      "second answer",
      "ThIrD AnSwEr",
      "clever star wars reference",
    ],
  },
];
