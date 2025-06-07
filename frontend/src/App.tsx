import { Routes, Route } from "react-router";
import FormBuilder from "./pages/FormBuilder";

function App() {
  return (
    <div>
      {/* <NavBar>
        <NavBarItem to="/builder">ساخت فرم</NavBarItem>
        <NavBarItem to="/homepage">مدیریت فرم‌ها</NavBarItem>
        <NavBarItem to="/results">دیدن نتیجه‌ها</NavBarItem>
        <NavBarItem to="/edit-user">nklnlnlkn حساب کاربری</NavBarItem>
      </NavBar> */}
      <Routes>
        <Route path="/" element={<FormBuilder />} />
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/builder/:formId?" element={<FormBuilder />} />
        <Route path="/results" element={<FormResults />} />
        <Route path="/edit-user" element={<EditUser />} />
        <Route path="/fill/:formId" element={<FillForm />} />
        <Route path="/homepage" element={<HomePage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
