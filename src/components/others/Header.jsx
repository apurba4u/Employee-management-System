import { useState } from "react"
const Header = (props) => {
  const [userName, setUserName] = useState('')
  // { if (!data) {
  //   setUserName("Apurba Ovi")
  // } else {
  //   setUserName(userName)
  // }}
  function logOut() {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    // window.location.reload()
  }
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">Hello <br /> <span className="text-3xl font-semibold">Apurba👋</span> </h1>
      <button onClick={logOut}
      className="bg-red-600 text-lg font-medium px-5 py-2 rounded-sm">Log Out</button>
    </div>
  )
}

export default Header
