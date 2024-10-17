import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

import Neet from "./pages/exams/neet/Neet";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <div className="bg-[#0f1824]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/neet" element={<Neet />} />
          <Route path="/programs" element={""} />
          <Route path="/scholarships" element={""} />
          <Route path="/test-series" element={""} />
          <Route path="/study-materials" element={""} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
