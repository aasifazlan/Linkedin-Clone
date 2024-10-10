 import { Navigate, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Layout from "./components/Layout"
import LoginPage from "./pages/auth/LoginPage"
import SignupPage from "./pages/auth/SignupPage"
 
 

function App() {
 

  return ( 
   <Layout> 
    <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
     
    </Routes>
   </Layout>
  )
}

export default App
