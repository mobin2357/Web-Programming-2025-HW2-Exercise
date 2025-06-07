import { Routes, Route } from "react-router";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FormBuilder from "./pages/FormBuilder";
import FormResults from "./pages/FormResults";
import EditUser from "./pages/EditUser";
import FillForm from "./pages/FillForm";
import HomePage from "./pages/HomePage";
import { NavBar, NavBarItem } from "./components/aNavBar";

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
