import Question from "../src/questions/Question";
import { yieldQuestion } from "../src/questions/QuestionsList";

describe("testing the exported question getter funcion", () => {
  test("should yield question number 3", () => {
    const test: Question = {
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
    };
    expect(yieldQuestion(3)).toEqual(test);
  });

  test("should yield by default question number 0 without provided args", () => {
    const test: Question = {
      questionCode: {},
      questionId: 0,
      questionText: "The text for question number 0",
      selectedAnswer: [],
      correctAnswer: 0,
      availableAnswers: ["first Answer", "second answer", "ThIrD AnSwEr"],
    };
    expect(yieldQuestion()).toEqual(test);
  });
});
