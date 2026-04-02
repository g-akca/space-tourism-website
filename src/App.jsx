import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout bg="bg-[url('assets/home/background-home-mobile.jpg')] tablet:bg-[url('assets/home/background-home-tablet.jpg')]">
            <HomePage />
          </Layout>
        }
      />
    </Routes>
  )
}

export default App
