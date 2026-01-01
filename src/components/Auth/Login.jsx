import { useState } from "react"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function submitHandler (elem) {
    elem.preventDefault()
    console.log("Form Submitted")
    console.log("Email: " + email + " Password: " + password)
    setEmail('')
    setPassword('')
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form className='flex flex-col items-center justify-center' onSubmit={(elem) => {
            submitHandler(elem)
          }}>
          <input type="email" required className=' outline-none bg-transparent border-2 border-emerald-600 text-xl p-4 rounded-full placeholder:text-gray-400' placeholder='apurba@example.com' 
          value={email} 
          onChange={(elem) => {
            setEmail(elem.target.value)
          }}/>
          <input type="password" required className=' outline-none bg-transparent border-2 border-emerald-600 text-xl p-4 rounded-full mt-4 placeholder:text-gray-400' placeholder='X@%5%Apu' 
          value={password} 
          onChange={(elem) => {
            setPassword(elem.target.value)
          }}/>
          <button className='w-full text-white outline-none bg-emerald-600 text-xl p-4 rounded-full mt-7 placeholder:text-white'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
