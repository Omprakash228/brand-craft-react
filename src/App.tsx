import './App.css'
import Navbar from './components/Navbar/Navbar';
import Scene from './components/Scene/Scene';
import Properties from './components/Properties/Properties';

function App() {
  return (
    <div>
      <Navbar />
      <div id="app-container">
        <div id="scene-container">
          <Scene/>
        </div>
        <div id="property-container">
          <Properties />
        </div>
      </div>
    </div>
  )
}

export default App
