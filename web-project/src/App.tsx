import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LogIn from './pages/LogIn'
import MainPage from './pages/MainPage'
import ItemPage from './pages/ItemPage'
import AddBookPage from './pages/AddBookPage'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LogIn />} />
          <Route path="home" element={<MainPage />} />
          <Route path="new" element={<AddBookPage />} />
          <Route path="user/:name" element={<ItemPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
