import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

import CuteNotFoundPage from "./components/CuteNotFoundPage";

import Jee from "./pages/exams/jee/Jee";
import Neet from "./pages/exams/neet/Neet";
import HomePage from "./pages/home/HomePage";
import OnlinePrograms from "./pages/programs/onlineprograms/OnlinePrograms";

function App() {
  return (
    <div className="bg-[#0f1824]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/neet" element={<Neet />} />
          <Route path="/jee" element={<Jee />} />
          <Route path="/online-programs" element={<OnlinePrograms />} />
          <Route path="/test-series" element={""} />
          <Route path="/study-materials" element={""} />
          <Route path="*" element={<CuteNotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
