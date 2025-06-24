import Router, { Route, Switch } from 'crossroad'
import './App.css'
import { lazy } from 'react'

const Editor = lazy(() => import('./components/Editor/Editor'));
const LandingPage = lazy(() => import('./components/LandingPage/LandingPage'));

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
