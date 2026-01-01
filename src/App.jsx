import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { getLocalstorage, setLocalstorage } from "./utils/localstorage"
import { AuthContext } from "./context/AuthProvider"

const App = () => {
  const [user, setUser] = useState(null)
  const handleLogin = (email, password) => {
    if (email == "user@me.com" && password == "123") {
      // console.log("This is User, xd!")
      setUser('employee')
    } 
    else if (email == 'admin@me.com' && password == '123') {
      // console.log("This is Admin, Xd!")
      setUser('admin')
    } else alert ("Invalid Credentials")
  }
  // handleLogin('user@me.com','123')
  const data = useContext(AuthContext)
  console.log(data)
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/>: ''}
    {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    {/* <Login /> */}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}

export default App
