 import { Navigate, Routes, Route } from "react-router-dom"
 import toast, {Toaster} from "react-hot-toast"
 import { useQuery } from "@tanstack/react-query"
 import { axiosInstance } from "./lib/axios"
import HomePage from "./pages/HomePage"
import Layout from "./components/Layout"
import LoginPage from "./pages/auth/LoginPage"
import SignupPage from "./pages/auth/SignupPage"
import NotificationsPage from "./pages/NotificationsPage"
 
 

function App() {
  const { data: authUser, isLoading } = useQuery({
		queryKey: ["authUser"],
		queryFn: async () => {
			try {
				const res = await axiosInstance.get("/auth/me");
				return res.data;
			} catch (err) {
				if (err.response && err.response.status === 401) {
					return null;
				}
				toast.error(err.response.data.message || "Something went wrong");
			}
		},
	});
console.log("authUser", authUser);
	if (isLoading) return null; 

  return ( 
   <Layout> 
    <Routes>
      <Route path="/" element={authUser ? <HomePage /> : <Navigate to={"/login"} />} />
      <Route path="/signup" element={ <SignupPage />} />
      <Route path="/login" element={!authUser ?<LoginPage/> : <Navigate to={"/"} />} />
	  <Route path="/notification" element={authUser ? <NotificationsPage/> : <Navigate to={"/"}/>} />
     
    </Routes>
   </Layout>
  )
}

export default App
