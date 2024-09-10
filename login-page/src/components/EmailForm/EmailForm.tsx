'use client';
import styles from "./EmailForm.module.css";
import { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [isEmptyEmail, setIsEmptyEmail] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const [submit, setSubmit] = useState(false);
  const [submitedEmail, setSubmitedEmail] = useState('');

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const value: string = event.currentTarget.value;
    setEmail(value); // for re-rendering
    setIsEmptyEmail(value === '');
    
    const emailRegex = /^[^\s@]+@(connect\.hku\.hk|hku\.hk)$/;
    setIsValidEmail(emailRegex.test(value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSubmit(true);
    setSubmitedEmail(email.substring(0, email.indexOf('@')));
  }

  return (
    <form className={styles['email-form']}>
      <legend><h2>Email Form</h2></legend>
      <div className={styles['form-items']}>
        <label htmlFor="email">Email:</label>
        <input 
          id="email" 
          className={
          `${isValidEmail ? styles['valid-email'] : styles['invalid-email']} 
          ${isEmptyEmail && styles['empty-email']}`
          }
          type="text" 
          placeholder="Email"
          value={email} 
          onInput={handleInput}
        />
      </div>
      <button 
        onClick={handleSubmit}
        className={
          `${styles['form-submit']} 
          ${!isValidEmail && styles['disabled-submit']}`}
        disabled={!isValidEmail}
      >
      Submit
      </button>
      {submit && <p className="form-items">{submitedEmail}</p>}
    </form>
  );
}
