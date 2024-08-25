import React from 'react';
import styles from './Input.module.css';

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  setValue: (value: string) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  error: string;
};

const Input = ({label, type, name, value, setValue, onChange, error, onBlur}: InputProps) => {

  return (
    <div className={styles.wrapper}>
      <label 
        htmlFor={name} 
        className={styles.label}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}/>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;