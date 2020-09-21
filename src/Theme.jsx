import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

export const lightTheme = createMuiTheme({
  palette: {
    // primary: { main: '#00695f' },
    // secondary: { main: '#14a37f' },
    // error: { main: '#bf1650' },
    // warning: { main: '#bf1650' },
    // info: { main: Colors.info },
    // success: { main: Colors.success }
    primary: { main: '#2196f3' },
    secondary: { main: '#f50057' },
    background: {
      default: '#fff',
    },
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

// Admin theme
export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',

    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
    textSecondary: {
      main: 'rgba(255, 255, 255, 0.7)',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#121212',
    },
  },
})
