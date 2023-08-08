import "./_App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UploadVideo from "./pages/UploadVideo/UploadVideo";
import NotFound from "./pages/NotFound/NotFound";
import UploadSuccess from "./pages/UploadSuccess/UploadSuccess"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/video/:id" element={<HomePage />} />
          <Route path="/upload" element={<UploadVideo />} />
          <Route path="/uploaded" element={<UploadSuccess />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
