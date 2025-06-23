import Router, { Route, Switch } from 'crossroad'
import './App.css'
import LandingPage from './components/LandingPage/LandingPage'
import Editor from './components/Editor/Editor'
import CustomAuth from './shared/components/Auth/CustomAuth'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={LandingPage} />
          <Route path="/editor" component={Editor} />
          <Route path="/auth" component={CustomAuth} />
        </Switch>
      </Router>
    </>
  )
}

export default App
