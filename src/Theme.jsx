import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    // primary: { main: '#00695f' },
    // secondary: { main: '#14a37f' },
    // error: { main: '#bf1650' },
    // warning: { main: '#bf1650' },
    // info: { main: Colors.info },
    // success: { main: Colors.success }
    primary: { main: '#2196f3' },
    secondary: { main: '#f50057' },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  overrides: {
    MuiInput: {
      underline: {
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid #f50057`,
        },
      },
    },
  },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
})

export default theme
