import Header from '@/components/header/header'
import ChipsContainer from '@/components/chips-container/chips-container'
import { Box, Container } from '@mui/material'
import './app.css'

function App() {

  return (
    <Container>
      <Box px={[0, 0, "85px"]}>
        <Header />
        <ChipsContainer />
      </Box>
    </Container>
  )
}

export default App
