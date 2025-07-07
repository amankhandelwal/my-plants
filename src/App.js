import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import PlantDetailsPage from './pages/PlantDetailsPage/PlantDetailsPage';
import './App.css';

function App() {
  return (
    <Router basename={"/my-plants"}>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<BalconyView />} />
            <Route path="/list" element={<HomePage />} />
            <Route path="/plant/:slug" element={<PlantDetailsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;