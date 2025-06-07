import './App.css'
import Navbar from './components/Navbar/Navbar';
import Scene from './components/Scene/Scene';
import Properties from './components/Properties/Properties';
import { useEffect, useState } from 'react';

function App() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const check = () => {
      const isPortrait = window.matchMedia('(orientation: portrait)').matches
      const isMobile = window.innerWidth <= 768
      if (isPortrait && isMobile) {
        setShowToast(true)
      }
    }

    check()
  }, [])

  useEffect(() => {
    if (showToast) {
      const timeout = setTimeout(() => {
        setShowToast(false)
      }, 5000)

      return () => clearTimeout(timeout) // Cleanup on unmount or re-render
    }
  }, [showToast])

  return (
    <div>
      <Navbar />
      <div id="app-container">
        <div id="scene-container">
          <Scene />
        </div>
        <div id="property-container">
          <Properties />
        </div>
        {showToast && (
          <div id="info-message">
            Please view on desktop browser or switch to landscape mode
          </div>
        )}
      </div>
    </div>
  )
}

export default App
