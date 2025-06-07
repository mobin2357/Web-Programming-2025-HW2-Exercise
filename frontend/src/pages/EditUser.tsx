// import { useState, ChangeEvent } from "react";
// import { useNavigate } from "react-router";
// import styles from "./EditUser.module.css";
// import { dummyCurrentUser } from "../data/ShapeTypes";

// type FieldKey = "email";
// type FormData = Record<FieldKey, string> & { password: string };
// type FormErrors = Partial<Record<FieldKey, string>>;

// const fields: { label: string; key: FieldKey }[] = [
//   { label: "ایمیل", key: "email" },
// ];

// // async function hashString(str: string): Promise<string> {
// //   const buf = await crypto.subtle.digest(
// //     "SHA-256",
// //     new TextEncoder().encode(str)
// //   );
// //   return Array.from(new Uint8Array(buf))
// //     .map((b) => b.toString(16).padStart(2, "0"))
// //     .join("");
// // }

// function checkPasswordStrength(pwd: string): string | null {
//   if (pwd.length < 6) {
//     return "رمز عبور باید حداقل 6 کاراکتر باشد";
//   }
//   if (!/[A-Za-z]/.test(pwd) || !/[0-9]/.test(pwd)) {
//     return "رمز عبور باید شامل حروف و اعداد باشد";
//   }
//   return null;
// }

// export default function EditUser() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState<FormData>({
//     email: dummyCurrentUser.email,
//     password: dummyCurrentUser.password,
//   });
//   const [errors, setErrors] = useState<FormErrors>({});

//   const [isChangingPwd, setIsChangingPwd] = useState(false);
//   const [oldPwd, setOldPwd] = useState("");
//   const [newPwd, setNewPwd] = useState("");
//   const [repeatPwd, setRepeatPwd] = useState("");
//   const [pwdErrors, setPwdErrors] = useState<{
//     old?: string;
//     new?: string;
//     repeat?: string;
//   }>({});

//   const handleChange = (key: FieldKey, e: ChangeEvent<HTMLInputElement>) => {
//     setFormData((p) => ({ ...p, [key]: e.target.value }));
//     setErrors((p) => ({ ...p, [key]: undefined }));
//   };

//   const validateField = (key: FieldKey, value: string): string | null => {
//     if (!value.trim()) return "این فیلد نباید خالی باشد";
//     if (key === "email" && !/^[\w.-]+@[\w.-]+\.\w+$/.test(value))
//       return "ایمیل نامعتبر است";
//     return null;
//   };

//   const handleValidate = (key: FieldKey) => {
//     const err = validateField(key, formData[key]);
//     if (err) setErrors((p) => ({ ...p, [key]: err }));
//     else {
//       if (key === "email") {
//         dummyCurrentUser.email = formData.email;
//         dummyCurrentUser.updatedAt = new Date().toISOString();
//       }
//       alert(`${fields.find((f) => f.key === key)!.label} با موفقیت ذخیره شد`);
//     }
//   };

//   const startPwdChange = () => {
//     setIsChangingPwd(true);
//     setPwdErrors({});
//     setOldPwd("");
//     setNewPwd("");
//     setRepeatPwd("");
//   };

//   const handleSavePwd = async () => {
//     const errs: typeof pwdErrors = {};
//     if (oldPwd !== formData.password) {
//       errs.old = "رمز قدیمی نادرست است";
//     }
//     if (!newPwd) errs.new = "رمز جدید نباید خالی باشد";
//     else {
//       const strengthError = checkPasswordStrength(newPwd);
//       if (strengthError) {
//         errs.new = strengthError;
//       }
//     }
//     if (newPwd !== repeatPwd) {
//       errs.repeat = "تکرار رمز با رمز جدید مطابقت ندارد";
//     }

//     if (Object.keys(errs).length) {
//       setPwdErrors(errs);
//       return;
//     }
//     setFormData((p) => ({ ...p, password: newPwd }));
//     setIsChangingPwd(false);
//     dummyCurrentUser.password = newPwd;
//     dummyCurrentUser.updatedAt = new Date().toISOString();
//     alert("گذرواژه با موفقیت تغییر یافت");
//   };

//   return (
//     <div className={styles.page}>
//       <div className={styles.header}>
//         <button
//           className={styles.backButton}
//           onClick={() => navigate("/homepage")}
//         >
//           بازگشت به صفحه اصلی
//         </button>
//         <h1 className={styles.title}>فرم‌ساز</h1>
//       </div>

//       <div className={styles.formGrid}>
//         {fields.map(({ label, key }) => (
//           <div key={key} className={styles.formRow}>
//             <div className={styles.label}>{label}</div>
//             <input
//               className={styles.input}
//               type={
//                 key === "email" ? "email" : key === "phone" ? "tel" : "text"
//               }
//               value={formData[key]}
//               onChange={(e) => handleChange(key, e)}
//               placeholder="مقدار را وارد کنید"
//             />
//             <button
//               className={styles.editButton}
//               onClick={() => handleValidate(key)}
//             >
//               تغییر
//             </button>
//             {errors[key] && <div className={styles.error}>{errors[key]}</div>}
//           </div>
//         ))}

//         {!isChangingPwd ? (
//           <div className={styles.actions}>
//             <button className={styles.saveButton} onClick={startPwdChange}>
//               تغییر گذرواژه
//             </button>
//           </div>
//         ) : (
//           <div className={styles.passwordSection}>
//             <input
//               className={styles.input}
//               type="password"
//               value={oldPwd}
//               onChange={(e) => {
//                 setOldPwd(e.target.value);
//                 setPwdErrors((p) => ({ ...p, old: undefined }));
//               }}
//               placeholder="رمز قدیمی"
//             />
//             {pwdErrors.old && (
//               <div className={styles.error}>{pwdErrors.old}</div>
//             )}

//             <input
//               className={styles.input}
//               type="password"
//               value={newPwd}
//               onChange={(e) => {
//                 setNewPwd(e.target.value);
//                 setPwdErrors((p) => ({ ...p, new: undefined }));
//               }}
//               placeholder="رمز جدید"
//             />
//             {pwdErrors.new && (
//               <div className={styles.error}>{pwdErrors.new}</div>
//             )}

//             <input
//               className={styles.input}
//               type="password"
//               value={repeatPwd}
//               onChange={(e) => {
//                 setRepeatPwd(e.target.value);
//                 setPwdErrors((p) => ({ ...p, repeat: undefined }));
//               }}
//               placeholder="تکرار رمز جدید"
//             />
//             {pwdErrors.repeat && (
//               <div className={styles.error}>{pwdErrors.repeat}</div>
//             )}

//             <button className={styles.saveButton} onClick={handleSavePwd}>
//               ذخیره
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
