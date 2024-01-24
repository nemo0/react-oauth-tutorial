import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Secure from "./components/Secure";
import { AuthProvider } from "@descope/react-sdk";

import "./App.css";

function App() {
  return (
    <>
      <AuthProvider projectId="YOUR_PROJECT_ID">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/secure" element={<Secure />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
