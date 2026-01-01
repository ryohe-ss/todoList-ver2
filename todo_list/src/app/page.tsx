import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>todoListの作成</h1>
        <input type="text" />
        <div className="outputField">
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
