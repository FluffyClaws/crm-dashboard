import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import CustomerList from "../components/CustomerList";
import { customers } from "../data/customerData";
import "./App.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <Routes>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route
            path="/customers"
            element={<CustomerList customers={customers} />}
          />

          {/* <Route path="/income" element={<Income />} />
          <Route path="/promote" element={<Promote />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<Dashboard />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
