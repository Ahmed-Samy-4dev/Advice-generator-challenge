import { useState, useEffect } from 'react';
import styles from './Advice.module.css';

function Advice() {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState("");

  // Fetch advice from API
  async function fetchAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice", { cache: "no-cache" });
    const data = await response.json();
    setAdvice(data.slip.advice);
    setAdviceId(data.slip.id);
  }
  // Generate first advice
  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className={styles.card}>
      <p className={styles.adviceId}>ADVICE #{adviceId}</p>
      <h1 className={styles.quote}>
        {advice}
      </h1>
      <div className={styles.divider}>
        <img src="" alt="divider" />
      </div>
      <button className={styles.diceButton} onClick={fetchAdvice}>
        <img src="./src/assets/vectors/icon-dice.svg" alt="dice icon" className={styles.diceIcon} />
      </button>
    </div>
  );
}

export default Advice;