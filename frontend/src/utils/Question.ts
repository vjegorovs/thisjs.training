export default interface Question {
  questionCode: string; // here something regarding highlight.js or prism.js
  questionId: Number;
  questionText: string;
  selectedAnswer: Boolean[];
  correctAnswer: Number;
  availableAnswers: string[];
}
