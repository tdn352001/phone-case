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
import ThirdParties from '~/components/templates/auth/third-parties'
import { routers } from '~/configs/routers'
import styles from './register.module.scss'

const cx = classNames.bind(styles)

const schema = yup.object().shape({
  email: yup.string().required('Required field.').email('Email is not valid.'),
  first_name: yup.string().required('Required field'),
  last_name: yup.string().required('Required field'),
  password: yup.string().required('Required field'),
})

type RegisterForm = yup.InferType<typeof schema>

const RegisterPageContent = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const methods = useForm<RegisterForm>({
    resolver: yupResolver(schema),
    mode: 'all',
    criteriaMode: 'all',
    reValidateMode: 'onChange',
  })

  const handleSubmitForm = (data: RegisterForm) => {
    setLoading(true)
    setError('')
    setTimeout(() => {
      setLoading(false)
      setError('Test error')
    }, 2000)
  }

  return (
    <FormProvider {...methods}>
      <AuthContainer>
        <AuthHeading title="Create account" />
        <AuthForm onSubmit={methods.handleSubmit(handleSubmitForm)}>
          <TextField name="first_name" placeholder="First Name" />
          <TextField name="last_name" placeholder="Last Name" />
          <TextField name="email" placeholder="Email" />
          <TextField name="password" type="password" placeholder="Password" />
          <ErrorMessage message={error} />
          <Button className={cx('btn-submit', 'align-center')} loading={loading}>
            Register
          </Button>
          <Link className={cx('align-center')} href={routers.login}>
            Login
          </Link>
        </AuthForm>
        <ThirdParties />
      </AuthContainer>
    </FormProvider>
  )
}

export default RegisterPageContent
