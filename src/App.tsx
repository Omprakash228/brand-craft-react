import Router, { Route, Switch } from 'crossroad'
import './App.css'
import LandingPage from './components/LandingPage/LandingPage'
import Editor from './components/Editor/Editor'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={LandingPage} />
          <Route path="/editor" component={Editor} />
        </Switch>
      </Router>
    </>
  )
}

export default App
