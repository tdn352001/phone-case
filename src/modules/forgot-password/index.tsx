'use client'

import { useState } from 'react'
import EmailForm from '~/modules/forgot-password/email-form'
import ResetForm from '~/modules/forgot-password/reset-form'

const ForgotPasswordPageContent = () => {
  const [email, setEmail] = useState('')
  const [step, setStep] = useState(0)

  const handleEmailFormSubmit = (email: string) => {
    setEmail(email)
    setStep(1)
  }

  if (!step) {
    return <EmailForm email={email} onSubmit={handleEmailFormSubmit} />
  }

  return <ResetForm email={email} />
}

export default ForgotPasswordPageContent
