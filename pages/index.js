//index.js
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Quiz</div>
      <Link href="/categories" className={styles.linkStyle}>
        Categorii
      </Link>
      <div>
        <Link href="/form">
          <button className={styles.newQuestion}>Adaugă Întrebare Nouă</button>
        </Link>
      </div>
    </div>
  );
}
