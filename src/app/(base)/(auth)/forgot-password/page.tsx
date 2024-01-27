import { Metadata } from 'next'
import ForgotPasswordPageContent from '~/modules/forgot-password'

const ForgotPasswordPage = () => {
  return <ForgotPasswordPageContent />
}

export const metadata: Metadata = {
  title: 'Login',
}

export default ForgotPasswordPage
