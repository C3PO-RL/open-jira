import { grey, red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: grey[300],
    },
    primary: {
      main: '#4a148c',
    },
    secondary: {
      main: '#19874b',
    },
    error: {
      main: red[400],
    },
  },
  components: {},
})
