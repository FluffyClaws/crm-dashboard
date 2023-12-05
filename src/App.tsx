import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <Routes>
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/income" element={<Income />} />
          <Route path="/promote" element={<Promote />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<Dashboard />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
