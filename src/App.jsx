import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="text-base leading-base">
      <Header />

      <Routes>
        <Route path="/" element={ <HomePage /> } />
      </Routes>
    </div>
  )
}

export default App
