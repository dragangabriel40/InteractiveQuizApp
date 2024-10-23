//categories.js
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const categories = [
  { id: "cultura-generala", name: "Cultura Generala" },
  { id: "stiinta", name: "Stiinta" },
  { id: "istorie", name: "Istorie" },
];

export default function Categories() {
  const router = useRouter();

  const handleCategoryClick = (categoryId) => {
    router.push(`/quiz/${categoryId}/question/1`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Categorii </div>
      {categories.map((category) => (
        <div key={category.id}>
          <button className={styles.buttons} onClick={() => handleCategoryClick(category.id)}>
            {category.name}
          </button>
        </div>
      ))}
    </div>
  );
}
