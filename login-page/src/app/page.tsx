'use client';
import styles from "./home.module.css";
import EmailForm from "@/components/EmailForm/EmailForm";

export default function Home() {
  return (
    <div className={styles.home}>
      <header>
        {/* ... */}
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
