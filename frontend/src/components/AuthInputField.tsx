import styles from "./AuthInputField.module.css";

interface Props {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function AuthInputField({
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
}: Props) {
  return (
    <div className={styles.authInputGroup}>
      <input
        className={`${styles.authInputField} ${error ? styles.authInputErrorBorder : ""}`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p className={styles.authInputErrorText}>{error}</p>}
    </div>
  );
}
