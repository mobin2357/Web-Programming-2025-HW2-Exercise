import styles from "./AuthButton.module.css";

interface Props {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function AuthButton({ text, onClick, type = "button" }: Props) {
  return (
    <button className={styles.authButton} type={type} onClick={onClick}>
      {text}
    </button>
  );
}
