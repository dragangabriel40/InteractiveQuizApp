import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

const categories = [
  { id: "cultura-generala", name: "Cultura Generala" },
  { id: "stiinta", name: "Stiinta" },
  { id: "istorie", name: "Istorie" },
];

export default function AddQuestion() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState(categories[0].id);

  useEffect(() => {
    const savedQuestions = JSON.parse(localStorage.getItem("addedQuestions")) || [];
    console.log("Saved Questions: ", savedQuestions);
  }, []);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddQuestion = () => {
    const newQuestion = {
      question,
      options,
      answer,
      category,
    };

    const addedQuestions = JSON.parse(localStorage.getItem("addedQuestions")) || [];
    addedQuestions.push(newQuestion);
    localStorage.setItem("addedQuestions", JSON.stringify(addedQuestions));

    setQuestion("");
    setOptions(["", "", "", ""]);
    setAnswer("");
    setCategory(categories[0].id);
  };

  return (
    <div className={styles.container}>
      <h1>Adaugă o nouă întrebare</h1>
      <div>
        <label>Întrebarea:</label>
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
      </div>
      <div>
        {options.map((option, index) => (
          <div key={index}>
            <label>Opțiunea {index + 1}:</label>
            <input type="text" value={option} onChange={(e) => handleOptionChange(index, e.target.value)} />
          </div>
        ))}
      </div>
      <div>
        <label>Răspuns corect:</label>
        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
      </div>
      <div>
        <label>Categorie:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleAddQuestion}>Adaugă Întrebare</button>
    </div>
  );
}
