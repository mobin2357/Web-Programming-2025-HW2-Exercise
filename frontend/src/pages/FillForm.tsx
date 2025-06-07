// import { useParams } from "react-router";
// import { useEffect, useState } from "react";
// import styles from "./FillForm.module.css";
// import {
//   dummyCurrentUser,
//   dummyForms,
//   dummyResults,
// } from "../data/ShapeTypes";
// import type { Form, Result } from "../data/ShapeTypes";
// import MultilineText from "../components/aMultilineText";

// export default function FillForm() {
//   const { formId: stringFormId } = useParams();
//   const formId = stringFormId ? parseInt(stringFormId, 10) : null;
//   const [form, setForm] = useState<Form | null>(null);
//   const [answers, setAnswers] = useState<{ [key: string]: string }>({});
//   const [currentStep, setCurrentStep] = useState(0);
//   const [submitError, setSubmitError] = useState<string | null>(null);

//   useEffect(() => {
//     if (formId) {
//       const foundForm = dummyForms.find((f) => f.id === formId);
//       setForm(foundForm || null);
//     }
//   }, [formId]);

//   if (!form) return <p style={{ textAlign: "center" }}>فرم پیدا نشد</p>;

//   const fieldsPerStep = 3;
//   const totalSteps = Math.ceil(form.fields.length / fieldsPerStep);
//   const currentFields = form.fields.slice(
//     currentStep * fieldsPerStep,
//     currentStep * fieldsPerStep + fieldsPerStep
//   );

//   const handleChange = (fieldId: number, value: string) => {
//     setAnswers((prev) => ({ ...prev, [fieldId]: value }));
//     if (submitError) {
//       const match = submitError.match(/«(.+?)»/);
//       if (
//         match &&
//         match[1] === form?.fields.find((f) => f.id === fieldId)?.name
//       ) {
//         setSubmitError(null);
//       }
//     }
//   };

//   const handleNext = () => {
//     if (currentStep < totalSteps - 1) setCurrentStep(currentStep + 1);
//   };

//   const handlePrevious = () => {
//     if (currentStep > 0) setCurrentStep(currentStep - 1);
//   };

//   const handleSubmit = () => {
//     const missingField = form.fields.find((field) => {
//       if (!field.required) return false;

//       const value = answers[field.id];

//       if (field.type === "صحیح یا غلط") {
//         return value !== "true"; // only "true" is valid
//       }

//       return value === undefined || value.trim?.() === "";
//     });

//     if (missingField) {
//       setSubmitError(`فیلد الزامی «${missingField.name}» را کامل کنید.`);
//       return;
//     }

//     setSubmitError(null);

//     const newResult: Result = {
//       id: Date.now(),
//       formId: form.id,
//       submittedAt: new Date().toISOString(),
//       responderId: dummyCurrentUser.id,
//       data: answers,
//     };

//     dummyResults.push(newResult);
//     // console.log("Result submitted:", newResult);
//     alert("فرم با موفقیت ارسال شد!");
//   };

//   return (
//     <div className={styles.formPage}>
//       <div className={styles.formContainer}>
//         <div className={styles.formCard}>
//           <h1 className={styles.formTitle}>{form.name}</h1>

//           {form.image && (
//             <div className={styles.imageBox}>
//               <img
//                 src={form.image}
//                 alt="form header"
//                 className={styles.imageWrapper}
//               />
//             </div>
//           )}

//           {form.description && (
//             <MultilineText text={form.description} className={styles.parag} />
//           )}

//           {currentFields.map((field) => (
//             <div key={field.id} className={styles.formField}>
//               <label className={styles.label}>
//                 {field.name}
//                 {field.required && <span className={styles.required}>*</span>}
//               </label>
//               {field.description && (
//                 <p className={styles.description}>{field.description}</p>
//               )}

//               {field.type === "صحیح یا غلط" ? (
//                 <label className={styles.checkboxLabel}>
//                   <input
//                     type="checkbox"
//                     checked={answers[field.id] === "true"}
//                     onChange={(e) =>
//                       handleChange(
//                         field.id,
//                         e.target.checked ? "true" : "false"
//                       )
//                     }
//                   />
//                   <span>تأیید می‌کنم</span>
//                 </label>
//               ) : field.type === "گزینه ای" ? (
//                 <select
//                   className={styles.select}
//                   value={answers[field.id] || ""}
//                   onChange={(e) => handleChange(field.id, e.target.value)}
//                 >
//                   <option value="">-- انتخاب کنید --</option>
//                   {field.options?.map((opt, idx) => (
//                     <option key={idx} value={opt}>
//                       {opt}
//                     </option>
//                   ))}
//                 </select>
//               ) : field.type === "متن بلند" ? (
//                 <textarea
//                   className={styles.textarea}
//                   value={answers[field.id] || ""}
//                   onChange={(e) => handleChange(field.id, e.target.value)}
//                   placeholder={field.defaultValue || ""}
//                 />
//               ) : (
//                 <input
//                   className={styles.input}
//                   type={field.type === "عددی" ? "number" : "text"}
//                   value={answers[field.id] || ""}
//                   onChange={(e) => handleChange(field.id, e.target.value)}
//                   placeholder={field.defaultValue || ""}
//                 />
//               )}
//             </div>
//           ))}

//           {submitError && (
//             <p
//               style={{ color: "red", marginTop: "-1rem", fontSize: "0.95rem" }}
//             >
//               {submitError}
//             </p>
//           )}

//           <div className={styles.formActions}>
//             {currentStep > 0 && (
//               <button onClick={handlePrevious} className={styles.actionLink}>
//                 مرحله قبل
//               </button>
//             )}
//             {currentStep < totalSteps - 1 ? (
//               <button
//                 onClick={handleNext}
//                 className={`${styles.actionLink} ${styles.primary}`}
//               >
//                 مرحله بعد
//               </button>
//             ) : (
//               <button onClick={handleSubmit} className={styles.submitButton}>
//                 ارسال نهایی
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
