import { Routes, Route } from "react-router";
import Page from "./pages/Page";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </div>
  );
}

export default App;
