import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: '#19874b',
    },
    error: {
      main: red[400],
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: { backgroundColor: '#4a148c' },
      },
    },
  },
})
