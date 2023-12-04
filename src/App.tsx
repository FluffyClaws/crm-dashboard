// App.tsx or Dashboard.tsx
import React from "react";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <div className="app">
      <Sidebar />
      {/* Rest of the dashboard content */}
    </div>
  );
};

export default App;
