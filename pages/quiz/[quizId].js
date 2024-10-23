import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Quiz() {
  const router = useRouter();
  const { quizId } = router.query;
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await fetch(`/api/questions`);
      const quizzes = await response.json();
      const quizData = quizzes[quizId];

      // Verificăm dacă avem întrebări salvate în localStorage pentru categoria curentă
      const savedQuestions = JSON.parse(localStorage.getItem("addedQuestions")) || [];
      const filteredQuestions = savedQuestions.filter((q) => q.category === quizId);

      // Combinăm întrebările din JSON cu cele din localStorage
      const combinedQuestions = quizData ? [...quizData.questions, ...filteredQuestions] : filteredQuestions;

      setQuiz({ ...quizData, questions: combinedQuestions });
    };

    fetchQuiz();
  }, [quizId]);

  if (!quiz) return <div>Quiz-ul nu a fost găsit.</div>;

  const navigateToQuestion = (index) => {
    router.push(`/quiz/${quizId}/question/${index + 1}`);
  };

  return (
    <div>
      <h1>{quiz.name}</h1>
      <div>
        {quiz.questions.map((q, index) => (
          <div key={index}>
            <button onClick={() => navigateToQuestion(index)}>Întrebarea {index + 1}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
