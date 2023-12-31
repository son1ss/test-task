import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/components/app/app'
import '@/vendor/fonts.css'
import '@/index.css'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Raleway',
      'Arial',
      'Helvetica',
      'sans-serif'
    ].join(',')
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
