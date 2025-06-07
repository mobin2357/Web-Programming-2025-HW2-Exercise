// // src/pages/FormResults.tsx

// import { useEffect, useState } from "react";
// import styles from "./FormResults.module.css";
// import { dummyResults, Result } from "../data/ShapeTypes";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
// } from "recharts";

// type Aggregated = { name: string; value: number };

// export default function FormResults() {
//   const [results, setResults] = useState<Result[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [chartType, setChartType] = useState<"bar" | "pie" | null>(null);
//   const [byDate, setByDate] = useState<Aggregated[]>([]);
//   const [byAgeGroup, setByAgeGroup] = useState<Aggregated[]>([]);

//   // colors for the pie slices
//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

//   useEffect(() => {
//     // load in-memory data
//     setResults(dummyResults);
//     setLoading(false);

//     // 1) aggregate submissions per day
//     const dateCount: Record<string, number> = {};
//     dummyResults.forEach((r) => {
//       const date = r.submittedAt.split(" ")[0]; // "YYYY-MM-DD"
//       dateCount[date] = (dateCount[date] || 0) + 1;
//     });
//     setByDate(
//       Object.entries(dateCount)
//         .map(([name, value]) => ({ name, value }))
//         .sort((a, b) => a.name.localeCompare(b.name))
//     );

//     // 2) bucket into age groups
//     const buckets: Record<string, number> = {
//       "<25": 0,
//       "25–34": 0,
//       "35–44": 0,
//       "45+": 0,
//     };
//     dummyResults.forEach((r) => {
//       const age = parseInt(r.data.age, 10);
//       if (age < 25) buckets["<25"]++;
//       else if (age < 35) buckets["25–34"]++;
//       else if (age < 45) buckets["35–44"]++;
//       else buckets["45+"]++;
//     });
//     setByAgeGroup(
//       Object.entries(buckets).map(([name, value]) => ({ name, value }))
//     );
//   }, []);

//   if (loading) return <div className="loader">در حال بارگذاری...</div>;
//   if (!results.length) return <div className="no-results">موردی یافت نشد.</div>;

//   // build table headers: fixed columns + dynamic data keys
//   const dataKeys = Object.keys(results[0].data);
//   const headers = ["id", "formId", "submittedAt", "responderId", ...dataKeys];

//   return (
//     <div className={styles.formResults}>
//       <main>
//         <h1>نتایج فرم‌ها</h1>

//         {/* chart toggle buttons */}
//         <div className={styles.chartButtons}>
//           <button
//             onClick={() =>
//               setChartType(chartType === "bar" ? null : "bar")
//             }
//             className={chartType === "bar" ? "active" : ""}
//           >
//             نمودار میله‌ای
//           </button>
//           <button
//             onClick={() =>
//               setChartType(chartType === "pie" ? null : "pie")
//             }
//             className={chartType === "pie" ? "active" : ""}
//           >
//             نمودار دایره‌ای
//           </button>
//         </div>

//         {/* Bar chart: submissions per day */}
//         {chartType === "bar" && (
//           <div className={styles.chartContainer}>
//             <h2>تعداد ارسال‌ها در هر روز</h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={byDate}>
//                 <XAxis dataKey="name" />
//                 <YAxis allowDecimals={false} />
//                 <Tooltip />
//                 <Bar dataKey="value" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         )}

//         {/* Pie chart: age‐group distribution */}
//         {chartType === "pie" && (
//           <div className={styles.chartContainer}>
//             <h2>توزیع گروه‌های سنی</h2>
//             <ResponsiveContainer width="100%" height={300}>
//               <PieChart>
//                 <Pie
//                   data={byAgeGroup}
//                   dataKey="value"
//                   nameKey="name"
//                   outerRadius={100}
//                   label
//                 >
//                   {byAgeGroup.map((_, idx) => (
//                     <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Legend />
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         )}

//         {/* Raw results table */}
//         <div className={styles.tableContainer}>
//           <h2>جدول نتایج خام</h2>
//           <table>
//             <thead>
//               <tr>
//                 {headers.map((h) => (
//                   <th key={h}>{h}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {results.map((r) => (
//                 <tr key={r.id}>
//                   <td>{r.id}</td>
//                   <td>{r.formId}</td>
//                   <td>{r.submittedAt}</td>
//                   <td>{r.responderId}</td>
//                   {dataKeys.map((key) => (
//                     <td key={key}>{r.data[key]}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </main>
//     </div>
//   );
// }
