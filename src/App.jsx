import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import routes from './routes'

function App() {
  const routeComponents = routes.map(({ path, component }) => <Route exact path={path} component={component} />)

  return (
    <ThemeProvider>
      <Router>{routeComponents}</Router>
    </ThemeProvider>
  )
}

export default App
