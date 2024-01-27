'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import classNames from 'classnames/bind'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as yup from 'yup'
import Button from '~/components/common/buttons/main-button'
import ErrorMessage from '~/components/common/error-message'
import TextField from '~/components/common/inputs/text-field'
import Link from '~/components/common/link'
import AuthContainer from '~/components/templates/auth/container'
import AuthForm from '~/components/templates/auth/form'
import AuthHeading from '~/components/templates/auth/heading'
import { routers } from '~/configs/routers'
import styles from './email-form.module.scss'

const cx = classNames.bind(styles)

const schema = yup.object().shape({
  email: yup.string().required('Required field.').email('Email is not valid.'),
})

type EmailFormType = yup.InferType<typeof schema>

interface EmailFormProps {
  email?: string
  onSubmit?: (email: string) => void
}

const EmailForm = ({ email, onSubmit }: EmailFormProps) => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const methods = useForm<EmailFormType>({
    resolver: yupResolver(schema),
    mode: 'all',
    criteriaMode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      email,
    },
  })

  const handleSubmitForm = ({ email }: EmailFormType) => {
    setLoading(true)
    setError('')

    onSubmit?.(email)
  }

  return (
    <FormProvider {...methods}>
      <AuthContainer>
        <AuthHeading
          title="Reset your password"
          subtitle="We will send you an email containing a code to reset password."
        />
        <AuthForm onSubmit={methods.handleSubmit(handleSubmitForm)}>
          <TextField name="email" placeholder="Email" />
          <ErrorMessage message={error} />
          <Button className={cx('btn-submit', 'align-center')} loading={loading}>
            Submit
          </Button>
          <Link className={cx('align-center')} href={routers.login}>
            Login
          </Link>
        </AuthForm>
      </AuthContainer>
    </FormProvider>
  )
}

export default EmailForm
