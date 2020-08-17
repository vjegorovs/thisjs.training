export default interface Question {
  questionCode: {}; // here something regarding highlight.js or prism.js
  questionId: Number;
  questionText: string;
  selectedAnswer: Boolean[];
  correctAnswer: Number;
  availableAnswers: string[];
}
