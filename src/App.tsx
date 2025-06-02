import { Leva } from 'leva'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Scene from './components/Scene/Scene';

function App() {
  const sizes = {
    folderTitleHeight: '35px'
  }
  const fonts = {
    mono: `'Roboto'`,
    sans: `Roboto`,
  }
  const fontSizes = {
    root: '12px',
  }
  const colors = {
    elevation1: '#292d39',
    elevation2: '#101012',
    elevation3: '#222222',
    accent1: '#0066DC',
    accent2: '#007BFF',
    accent3: '#3C93FF',
    highlight1: '#535760',
    highlight2: '#8C92A4',
    highlight3: '#FEFEFE',
    vivid1: '#ffcc00',
  }
  const levaTheme = { colors, fonts, fontSizes, sizes }

  return (
    <div>
      <Navbar />
      <div id="app-container">
        <div id="scene-container">
          <Scene/>
        </div>
        <div id="property-container">
          <Leva
            titleBar={{ drag: false }}
            collapsed={false}
            fill={true}
            flat={true}
            theme={levaTheme}
          />
        </div>
      </div>
    </div>
  )
}

export default App
