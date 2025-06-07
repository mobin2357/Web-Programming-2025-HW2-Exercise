// import { useState, FormEvent } from "react";
// import { useNavigate } from "react-router";
// import AuthInputField from "../components/AuthInputField";
// import AuthButton from "../components/AuthButton";
// import AuthGoogleButton from "../components/AuthGoogleButton";
// import styles from "./Signup.module.css";
// import { dummyUsers } from "../data/ShapeTypes";

// interface FormData {
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

// interface Errors {
//   [key: string]: string;
// }

// export default function Signup() {
//   const [formData, setFormData] = useState<FormData>({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [errors, setErrors] = useState<Errors>({});
//   const [success, setSuccess] = useState<string>("");
//   const navigate = useNavigate();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     const newErrors: Errors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,}$/;

//     if (!formData.email) newErrors.email = "ایمیل الزامی است";
//     else if (!emailRegex.test(formData.email))
//       newErrors.email = "ایمیل معتبر نیست";
//     else if (dummyUsers.some((user) => user.email === formData.email))
//       newErrors.email = "این ایمیل قبلاً ثبت شده است";

//     if (!formData.password) newErrors.password = "رمز عبور الزامی است";
//     else if (!passwordRegex.test(formData.password))
//       newErrors.password =
//         "رمز عبور باید حداقل ۶ کاراکتر و شامل حرف و عدد باشد";

//     if (formData.confirmPassword !== formData.password)
//       newErrors.confirmPassword = "رمز عبور و تکرار آن یکسان نیستند";

//     return newErrors;
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     setErrors({});
//     setSuccess("");

//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     dummyUsers.push({
//       id: dummyUsers.length + 1,
//       email: formData.email,
//       password: formData.password,
//       createdAt: new Date().toISOString(),
//       updatedAt: new Date().toISOString(),
//     });
//     setSuccess("ثبت‌نام با موفقیت انجام شد");
//     navigate("/");
//   };

//   const renderField = (name: keyof FormData, placeholder: string) => (
//     <AuthInputField
//       type={
//         name === "password" || name === "confirmPassword" ? "password" : "text"
//       }
//       name={name}
//       placeholder={placeholder}
//       value={formData[name]}
//       onChange={handleChange}
//       error={errors[name]}
//     />
//   );

//   return (
//     <div className={styles.authSignupContainer}>
//       <h2 className={styles.authSignupTitle}>ثبت‌نام</h2>
//       <form className={styles.authSignupForm} onSubmit={handleSubmit}>
//         {renderField("email", "ایمیل")}
//         {renderField("password", "رمز عبور")}
//         {renderField("confirmPassword", "تکرار رمز عبور")}

//         {errors.general && (
//           <p className={styles.authSignupError}>{errors.general}</p>
//         )}
//         {success && <p className={styles.authSignupSuccess}>{success}</p>}

//         <AuthButton type="submit" text="ثبت‌نام" />
//         <AuthGoogleButton />
//         <AuthButton text="ورود" onClick={() => navigate("/")} />
//       </form>
//     </div>
//   );
// }
