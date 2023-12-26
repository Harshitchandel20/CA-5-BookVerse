import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './Components/Book'
import Register from './Components/Register';

function App() {

  const [search, setSearch] = useState("")

  const handleSearch = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Books search={search} handleSearch={handleSearch} />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
