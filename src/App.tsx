import { Routes, Route } from 'react-router-dom'
import { Signin, Signup, Dashboard, Account} from './components/pages/index'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './components/protectedRoute'

function App() {
  
  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <ProtectedRoute>
          <Route path='/dashboard' element={<Dashboard />} />
        </ProtectedRoute>
        <ProtectedRoute>
          <Route path='/account' element={<Account />} />
        </ProtectedRoute>
      </Routes>
    </AuthContextProvider>
      
  )
}

export default App
