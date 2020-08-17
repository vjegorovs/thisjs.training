export default interface Question {
  questionCode: string; // here something regarding highlight.js or prism.js
  questionId: Number;
  questionText: String;
  selectedAnswer: Boolean[];
  correctAnswer: Number;
  availableAnswers: String[];
}
