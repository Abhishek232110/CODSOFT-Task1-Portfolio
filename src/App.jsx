import { useState } from "react";
import AppRoutes from "./app/router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#222831] h-screen text-white">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
