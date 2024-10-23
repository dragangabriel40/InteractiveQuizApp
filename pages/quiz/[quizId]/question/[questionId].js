import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../../../../styles/Home.module.css";

export default function Question() {
  const router = useRouter();
  const { quizId, questionId } = router.query;
  const [quiz, setQuiz] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await fetch(`/api/questions`);
      const quizzes = await response.json();
      const quizData = quizzes[quizId];

      const savedQuestions = JSON.parse(localStorage.getItem("addedQuestions")) || [];
      const filteredQuestions = savedQuestions.filter((q) => q.category === quizId);

      const combinedQuestions = quizData ? [...quizData.questions, ...filteredQuestions] : filteredQuestions;

      setQuiz({ ...quizData, questions: combinedQuestions });
    };

    const savedScore = localStorage.getItem("quizScore");
    if (savedScore) {
      setScore(parseInt(savedScore, 10));
    }

    fetchQuiz();
  }, [quizId]);

  const checkAnswer = (selectedOption) => {
    if (answered) return;
    setAnswered(true);

    let message = "";
    let correct = false;

    if (selectedOption === quiz.questions[questionId - 1].answer) {
      message = "Răspuns corect!";
      correct = true;
      setScore((prevScore) => {
        const newScore = prevScore + 1;
        localStorage.setItem("quizScore", newScore);
        return newScore;
      });
    } else {
      message = `Răspuns greșit! Răspunsul corect este: ${quiz.questions[questionId - 1].answer}`;
    }

    setFeedbackMessage(message);
    setShowFeedback(true);

    setTimeout(() => {
      setAnswered(false);
      setShowFeedback(false);

      if (questionId < quiz.questions.length) {
        router.push(`/quiz/${quizId}/question/${parseInt(questionId) + 1}`);
      } else {
        router.push(`/quiz/${quizId}/final?score=${score + (correct ? 1 : 0)}&total=${quiz.questions.length}`);
        localStorage.removeItem("quizScore");
      }
    }, 3000);
  };

  if (!quiz) return <div>Încărcare...</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{quiz.questions[questionId - 1].question}</h2>
      {quiz.questions[questionId - 1].options.map((option, index) => (
        <button className={styles.buttons} key={index} onClick={() => checkAnswer(option)} disabled={answered}>
          {option}
        </button>
      ))}

      {showFeedback && <div>{feedbackMessage}</div>}
    </div>
  );
}
