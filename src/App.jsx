import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import DestinationPage from "./pages/DestinationPage";
import CrewPage from "./pages/CrewPage";
import TechnologyPage from "./pages/TechnologyPage";

import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence mode="wait">
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
            <Layout bg="bg-[url('assets/destination/background-destination-mobile.jpg')] tablet:bg-[url('assets/destination/background-destination-tablet.jpg')] desktop:bg-[url('assets/destination/background-destination-desktop.jpg')]">
              <DestinationPage />
            </Layout>
          }
        />

        <Route
          path="/crew"
          element={
            <Layout bg="bg-[url('assets/crew/background-crew-mobile.jpg')] tablet:bg-[url('assets/crew/background-crew-tablet.jpg')] desktop:bg-[url('assets/crew/background-crew-desktop.jpg')]">
              <CrewPage />
            </Layout>
          }
        />

        <Route
          path="/technology"
          element={
            <Layout bg="bg-[url('assets/technology/background-technology-mobile.jpg')] tablet:bg-[url('assets/technology/background-technology-tablet.jpg')] desktop:bg-[url('assets/technology/background-technology-desktop.jpg')]">
              <TechnologyPage />
            </Layout>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App
