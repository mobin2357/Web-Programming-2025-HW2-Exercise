// import FormView from "../components/aFormView";
// import styles from "./HomePage.module.css";
// import { Link } from "react-router";
// import { dummyForms, dummyResults, dummyCurrentUser } from "../data/ShapeTypes";
// import { useState, useEffect } from "react";

// export default function HomePage() {
//   // mocking data as hardcode. We should make it fetch the data in the final form.
//   // type form_data_type = [number, string, string, number];
//   // const my_forms: form_data_type[] = [
//   //   [1, "User registration form", "2023-05-12", 47],
//   //   [2, "Feedback form for app experience", "2022-11-03", 63],
//   //   [3, "Contact us form with message field", "2024-01-17", 29],
//   //   [4, "Login form with two-factor authentication", "2021-08-09", 75],
//   //   [5, "Survey form for customer satisfaction", "2023-04-25", 34],
//   //   [6, "Newsletter subscription form", "2022-07-14", 58],
//   //   [7, "Bug report form with screenshot upload", "2024-03-19", 61],
//   //   [8, "Job application form", "2021-12-30", 41],
//   //   [9, "Event registration form with RSVP", "2023-09-22", 38],
//   //   [10, "E-commerce checkout form", "2022-10-06", 72],
//   //   [11, "Support ticket submission form", "2023-02-11", 55],
//   //   [12, "Donation form with preset amounts", "2022-06-18", 67],
//   //   [13, "Onboarding form for new users", "2024-04-04", 22],
//   //   [14, "Password reset form", "2021-05-28", 80],
//   //   [15, "Product review form", "2023-08-15", 44],
//   //   [16, "Report abuse form", "2022-03-01", 36],
//   //   [17, "Account deletion confirmation form", "2024-01-05", 59],
//   //   [18, "Time-off request form", "2023-06-20", 31],
//   //   [19, "Pet adoption application form", "2021-09-13", 70],
//   //   [20, "Simple contact form with name and email", "2022-12-08", 48],
//   // ];

//   // const other_forms: form_data_type[] = [
//   //   [21, "Mobile app beta sign-up form", "2023-03-11", 53],
//   //   [22, "Workshop feedback form", "2022-08-19", 46],
//   //   [23, "Student course evaluation form", "2024-02-10", 64],
//   //   [24, "Internship application form", "2021-11-05", 32],
//   //   [25, "Freelancer project intake form", "2023-07-21", 57],
//   //   [26, "Travel reimbursement request form", "2022-09-16", 69],
//   //   [27, "Community event volunteer form", "2024-03-08", 45],
//   //   [28, "Medical history intake form", "2021-06-29", 60],
//   //   [29, "Product feature request form", "2023-10-02", 26],
//   //   [30, "Digital consent agreement form", "2022-04-13", 74],
//   //   [31, "Conference session proposal form", "2024-05-01", 41],
//   //   [32, "Real estate listing submission form", "2021-07-25", 66],
//   //   [33, "Mentorship signup form", "2023-12-09", 39],
//   //   [34, "Daily health check-in form", "2022-10-17", 70],
//   //   [35, "Remote work equipment request form", "2024-01-27", 31],
//   //   [36, "Library book request form", "2021-03-04", 23],
//   //   [37, "Incident report submission form", "2023-08-30", 55],
//   //   [38, "Website accessibility feedback form", "2022-01-20", 50],
//   //   [39, "Waitlist form for limited-access beta", "2024-03-15", 63],
//   //   [40, "Room reservation request form", "2021-12-01", 35],
//   //   [41, "Course enrollment override request form", "2023-06-18", 67],
//   //   [42, "Pet medical treatment consent form", "2022-11-25", 40],
//   //   [43, "Workshop material download form", "2024-04-07", 28],
//   //   [44, "Membership cancellation feedback form", "2021-10-12", 77],
//   // ];

//   const [my_forms_file, set_my_forms_file] = useState<any[][]>([]);
//   const [other_forms_file, set_other_forms_file] = useState<any[][]>([]);
//   useEffect(() => {
//     const myFormHolder = [];
//     for (let i: number = 0; i < dummyForms.length; i++) {
//       if (dummyCurrentUser.id !== dummyForms[i]["ownerId"]) {
//         continue;
//       }
//       const id = dummyForms[i]["id"];
//       const name = dummyForms[i]["name"];
//       const createdAt = dummyForms[i]["createdAt"];
//       let count = 0;
//       for (let j: number = 0; j < dummyResults.length; j++) {
//         if (dummyResults[j]["formId"] === id) {
//           count++;
//         }
//       }
//       myFormHolder.push([id, name, createdAt, count]);
//     }
//     set_my_forms_file(myFormHolder);

//     const otherFormHolder = [];
//     for (let i: number = 0; i < dummyForms.length; i++) {
//       const id = dummyForms[i]["id"];
//       const name = dummyForms[i]["name"];
//       const createdAt = dummyForms[i]["createdAt"];
//       let count = 0;
//       for (let j: number = 0; j < dummyResults.length; j++) {
//         if (dummyResults[j]["formId"] === id) {
//           count++;
//         }
//       }
//       otherFormHolder.push([id, name, createdAt, count]);
//     }

//     set_other_forms_file(otherFormHolder);
//     // console.log("this is useEffect: ");
//     // console.log(myFormHolder);
//     // console.log(dummyForms);
//   }, []);

//   // const which_form = [other_forms, my_forms];
//   const which_form = [other_forms_file, my_forms_file];

//   // const [isSearching, setIsSearching] = useState(0);
//   const [patchNumber, setPatchNumber] = useState(0);
//   const [isMyForm, setIsMyForm] = useState(1);
//   const title_of_forms = ["فرمهایی که میتوانم در آنها شرکت کنم!", "فرمهای من!"];

//   const increasePatchNumber = () => {
//     if (0 == which_form[isMyForm].length % 6) {
//       if (patchNumber < which_form[isMyForm].length / 6 - 1) {
//         setPatchNumber(patchNumber + 1);
//       }
//     } else {
//       if (patchNumber < Math.floor(which_form[isMyForm].length / 6)) {
//         setPatchNumber(patchNumber + 1);
//       }
//     }
//   };
//   const decreasePatchNumber = () => {
//     if (patchNumber > 0) {
//       setPatchNumber(patchNumber - 1);
//     }
//   };
//   const toggleForms = () => {
//     setIsMyForm((isMyForm + 1) % 2);
//     setPatchNumber(0);
//       // console.log("toggle form: ");
//       // console.log(which_form[isMyForm][patchNumber * 6 + 0 * 3 + 0][0]); 
//   };

//   return (
//     <div className={styles.page}>
//       <div className={styles.formGroupChanger}>
//         {isMyForm === 1 && (
//           <button onClick={toggleForms} className={styles.arrowButton}>
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//               <path
//                 d="M5 12h14M13 5l7 7-7 7"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               />
//             </svg>
//           </button>
//         )}
//         <h1 onClick={toggleForms} className={styles.headClass}>
//           {title_of_forms[isMyForm]}
//         </h1>

//         {isMyForm === 0 && (
//           <button onClick={toggleForms} className={styles.arrowButton}>
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//               <path
//                 d="M19 12H5M11 5l-7 7 7 7"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               />
//             </svg>
//           </button>
//         )}
//       </div>

//       <div className={styles.formViewerWhole}>
//         <div className={styles.formViewer}>
//           <div className={styles.formViewerButtons}>
//             <button
//               className={styles.formViewerButton}
//               onClick={increasePatchNumber}
//             >
//               بعدی
//             </button>
//             <button
//               className={styles.formViewerButton}
//               onClick={decreasePatchNumber}
//             >
//               قبلی
//             </button>
//             <button className={styles.formViewerButton}>
//               <Link to="/builder" style={{ color: "inherit" }}>
//                 ساخت فرم جدید
//               </Link>
//             </button>
//           </div>
          
//           <div className={styles.formViewerForms}>
//             {Array.from({ length: 2 }).map((_, i) => (
//               <div key={i} className={styles.formViewerFormsRows}>
//                 {Array.from({ length: 3 })
//                   .map((_, j) => (
//                     ((patchNumber * 6 + 3 * i + j < which_form[isMyForm].length) ?
//                       <FormView
//                         key={patchNumber * 6 + i * 3 + j}
//                         id={
//                           which_form[isMyForm][patchNumber * 6 + i * 3 + j][0]  
//                       }
//                       name={
//                         which_form[isMyForm][patchNumber * 6 + i * 3 + j][1]
//                       }
//                       date={
//                         which_form[isMyForm][patchNumber * 6 + i * 3 + j][2]
//                       }
//                       participants_count={
//                         which_form[isMyForm][patchNumber * 6 + i * 3 + j][3]
//                       }
//                       isMyFormStatus={isMyForm}
//                       empty={0}
//                     />
//                       :
//                       <FormView
//                         key={patchNumber * 6 + i * 3 + j}
//                         id = {-1}
//                         name= "placeholder"
//                         date={
//                           "placeholder"
//                         }
//                         participants_count={
//                           -1
//                         }
//                         isMyFormStatus={1}
//                         empty={1}
//                       />)
//                   ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
