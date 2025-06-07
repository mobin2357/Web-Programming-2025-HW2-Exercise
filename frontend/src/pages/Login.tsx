// import { useState, FormEvent } from "react";
// import { useNavigate } from "react-router";
// import AuthInputField from "../components/AuthInputField";
// import AuthButton from "../components/AuthButton";
// import AuthGoogleButton from "../components/AuthGoogleButton";
// import styles from "./Login.module.css";
// import { dummyUsers, dummyCurrentUser, User } from "../data/ShapeTypes";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);
//   const navigate = useNavigate();

//   const handleLogin = (e: FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     let tmpUser: User;

//     if (!email || !password) {
//       setError("ایمیل و رمز عبور الزامی هستند");
//     } else if (!emailRegex.test(email)) {
//       setError("ایمیل معتبر نیست");
//     } else {
//       tmpUser = dummyUsers.find((user) => user.email === email) as User;
//       if (!tmpUser) {
//         setError("کاربری با این ایمیل پیدا نشد");
//       } else if (tmpUser.password !== password) {
//         setError("رمز عبور اشتباه است");
//       } else {
//         dummyCurrentUser.id = tmpUser.id;
//         dummyCurrentUser.email = tmpUser.email;
//         dummyCurrentUser.password = tmpUser.password;
//         dummyCurrentUser.createdAt = tmpUser.createdAt;
//         dummyCurrentUser.updatedAt = tmpUser.updatedAt;
//         setSuccess("ورود موفقیت‌آمیز بود");
//         navigate("/homepage");
//       }
//     }
//   };

//   return (
//     <div className={styles.authLoginContainer}>
//       <h2 className={styles.authLoginTitle}>ورود</h2>
//       <form className={styles.authLoginForm} onSubmit={handleLogin}>
//         <AuthInputField
//           type="email"
//           name="email"
//           placeholder="ایمیل"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <AuthInputField
//           type="password"
//           name="password"
//           placeholder="رمز عبور"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {error && <p className={styles.authLoginError}>{error}</p>}
//         {success && <p className={styles.authLoginSuccess}>{success}</p>}
//         <AuthButton type="submit" text="ورود" />
//         <AuthGoogleButton />
//         <AuthButton text="ثبت‌نام" onClick={() => navigate("/signup")} />
//       </form>
//     </div>
//   );
// }
