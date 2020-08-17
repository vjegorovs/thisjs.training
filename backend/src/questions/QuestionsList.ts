import Question from "./Question";

export function yieldQuestion(requestId = 0): Question {
  return QuestionsList[requestId];
}

const QuestionsList: Question[] = [
  {
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
  },
  {
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
    
    const user: User = new UserAccount("Murphy", 2);`,
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
    
    const user: User = new UserAccount("Murphy", 3);`,
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
  },
  {
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
