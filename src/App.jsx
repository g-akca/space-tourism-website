import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import DestinationPage from "./pages/DestinationPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout bg="bg-[url('assets/home/background-home-mobile.jpg')] tablet:bg-[url('assets/home/background-home-tablet.jpg')] desktop:bg-[url('assets/home/background-home-desktop.jpg')]">
            <HomePage />
          </Layout>
        }
      />

      <Route
        path="/destination"
        element={
          <Layout bg="bg-[url('assets/destination/background-destination-mobile.jpg')] tablet:bg-[url('assets/destination/background-destination-tablet.jpg')]">
            <DestinationPage />
          </Layout>
        }
      />
    </Routes>
  )
}

export default App
