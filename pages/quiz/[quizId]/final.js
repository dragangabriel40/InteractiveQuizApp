import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";

export default function FinalPage() {
  const router = useRouter();
  const { score, total } = router.query;

  return (
    <div className={styles.container}>
      <h1>Felicitări! Ai terminat quiz-ul.</h1>
      <p>
        Scorul tău: {score} din {total}
      </p>
      <button className={styles.buttons} onClick={() => router.push("/")}>
        Înapoi la pagina principală
      </button>
    </div>
  );
}
