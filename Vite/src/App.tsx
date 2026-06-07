import { Outlet } from "react-router";

function App() {
  return (
    <div className="px-4 text-start">
      <h1>Lora</h1>

      <Outlet />
    </div>
  );
}

export default App;
