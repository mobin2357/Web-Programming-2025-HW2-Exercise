import styles from "./AuthGoogleButton.module.css";

export default function AuthGoogleButton() {
  const handleGoogleLogin = () => {
    alert("ورود با گوگل (شبیه‌سازی شده)");
  };

  return (
    <button className={styles.authGoogleButton} onClick={handleGoogleLogin}>
      <img
        className={styles.authGoogleIcon}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
        alt="Google"
      />
      ورود با گوگل
    </button>
  );
}
