import Question from "../src/questions/Question";
import { yieldQuestion } from "../src/questions/QuestionsList";

describe("testing the exported question getter funcion", () => {
  test("should yield question number 3", () => {
    const test: Question = {
      questionCode: `interface User {
        name: string;
        id: number;
      }
      
      class UserAccount {
        name: string;
        id: number;
      
        constructor(name: string, id: number) {
          this.name = name;
          this.id = id;
        }
      }
      
      const user: User = new UserAccount("Murphy", 4);`,

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
    expect({ ...yieldQuestion(3) }).toMatchObject(test);
  });

  test("should yield by default question number 0 without provided args", () => {
    const test: Question = {
      questionCode: `interface User {
        name: string;
        id: number;
      }
      
      class UserAccount {
        name: string;
        id: number;
      
        constructor(name: string, id: number) {
          this.name = name;
          this.id = id;
        }
      }
      
      const user: User = new UserAccount("Murphy", 1);`,

      questionId: 0,
      questionText: "The text for question number 0",
      selectedAnswer: [],
      correctAnswer: 0,
      availableAnswers: ["first Answer", "second answer", "ThIrD AnSwEr"],
    };
    expect({ ...yieldQuestion() }).toMatchObject(test);
  });
});
