import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider, Button } from '@material-ui/core'
import routes from './routes'
import { lightTheme, darkTheme } from './Theme'

function App() {
  const [isLightTheme, setIsLightTheme] = React.useState(true)

  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ))

  React.useEffect(() => {
    if (window.location.href.indexOf('admin') > -1) {
      setIsLightTheme(false)
    } else {
      setIsLightTheme(true)
    }
  })

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <Router>{routeComponents}</Router>
    </ThemeProvider>
  )
}

export default App
