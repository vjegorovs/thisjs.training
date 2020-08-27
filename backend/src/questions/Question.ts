export default interface Question {
  questionCode: string; // here something regarding highlight.js or prism.js
  questionId: Number;
  questionText: String;
  selectedAnswer: boolean[];
  correctAnswer: Number;
  availableAnswers: String[];
}
