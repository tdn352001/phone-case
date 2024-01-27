import { Metadata } from 'next'
import LoginPageContent from '~/modules/login'

const LoginPage = () => {
  return <LoginPageContent />
}

export const metadata: Metadata = {
  title: 'Login',
}

export default LoginPage
