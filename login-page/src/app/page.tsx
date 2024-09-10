'use client';
import styles from "./home.module.css";
import EmailForm from "@/components/EmailForm/EmailForm";

export default function Home() {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        Triple Uni <br/>
        Q3
      </header>
      
      <main className={styles.main}>
        <EmailForm />
      </main>
      
      <footer>
        {/* ... */}
      </footer>
    </div>
  );
}
