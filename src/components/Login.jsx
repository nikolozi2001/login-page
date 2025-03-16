import { useState } from 'react'
// Import the background image
import backgroundImage from '../assets/images/login page wallpaper.png'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }
    
    // Here you would typically make an API call to authenticate
    console.log('Login attempt with:', { email, password })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 bg-blue-900/40 p-8 rounded-2xl border border-blue-500 shadow-lg w-96 text-center">
        <h2 className="text-xl text-blue-300 font-semibold mb-4">USER LOGIN</h2>
        
        {error && (
          <div className="mb-4 p-2 bg-red-500/30 border border-red-400 rounded text-red-200 text-sm">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full bg-transparent text-white border border-blue-400 rounded-md px-4 py-2 mb-4 outline-none placeholder:text-blue-300"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full bg-transparent text-white border border-blue-400 rounded-md px-4 py-2 mb-4 outline-none placeholder:text-blue-300"
            required
          />
          
          <div className="flex justify-between items-center mb-4 text-xs text-blue-300">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-3 w-3 rounded border-blue-400 bg-transparent"
              />
              <label htmlFor="remember-me" className="ml-2">
                Remember me
              </label>
            </div>
            <a href="#" className="hover:text-blue-200">
              Forgot password?
            </a>
          </div>
          
          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition duration-200">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
