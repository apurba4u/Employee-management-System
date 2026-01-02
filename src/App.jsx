import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localstorage";
import { AuthContext } from "./components/Auth/AuthProvider";
import { data } from "react-router-dom";


const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext)
  const [loggedInUserDara, setLoggedInUserDara] = useState(null)

  // useEffect(() => {
  //   setLocalStorage()
  //   // getLocalStorage()
  // },[])

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem('loggedInUser')
  //   if(loggedInUser) {
  //     const userData = JSON.parse(loggedInUser)
  //     setUser(userData.role)
  //     setLoggedInUserDara(userData.data)
  //   }
  // },[])

  // useEffect(() => {
  //   if(authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //   }
  // }, [authData])

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({role: 'admin'}))
    } else if (authData) {
      const employee = authData.employees.find((e) => e.email == email && e.password == password)
      if(employee) {
        setUser("employee");
        setLoggedInUserDara(employee)
      localStorage.setItem("loggedInUser", JSON.stringify({role: 'employee', data: employee}))
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : (user == "employee" ? <EmployeeDashboard data={loggedInUserDara} /> : null)}
    </>
  );
};

export default App;
