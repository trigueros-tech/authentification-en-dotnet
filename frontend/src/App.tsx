import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./components/Home"
import SigninCallback from "./components/SigninCallback"
import SignoutCallback from "./components/SignoutCallback"

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/auth/signin" element={<SigninCallback />} />
        <Route path="/auth/signout" element={<SignoutCallback />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
