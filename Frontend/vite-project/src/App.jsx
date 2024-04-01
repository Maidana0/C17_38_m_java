import { ContextProvider } from './components/context/Context'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Layout from './components/layout/Layout'

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home />} />

          </Routes>
        </Layout>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
