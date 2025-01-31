import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser, selectUserLoggedIn, selectUserStatus } from 'src/store'
import { AuthForm } from '../components/AuthForm'

export const AdminLogin = () => {
  const userStatus = useSelector(selectUserStatus)
  const userIsLoggedIn = useSelector(selectUserLoggedIn)

  const navigate = useNavigate()
  const handleLoginUser = (email: string, password: string) =>
    loginUser(email, password)

  useEffect(() => {
    if (userStatus === 'succeeded' && userIsLoggedIn) {
      navigate('/admin')
    }
  }, [userStatus, userIsLoggedIn])

  return (
    <div className="login-page">
      <div className="login-page__form-container">
        <h2>Login</h2>
        <p>You have been logged out.</p>
        <AuthForm onSubmit={handleLoginUser} />
      </div>
    </div>
  )
}
