'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import classNames from 'classnames/bind'
import { useRouter } from 'next/navigation'
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
import { useAppDispatch } from '~/hooks/redux'
import { tokenManager } from '~/libs/token-manager'
import { authService } from '~/services/auth-service'
import { authActions } from '~/store/slices/auth-slice'
import styles from './login.module.scss'

const cx = classNames.bind(styles)

const schema = yup.object().shape({
  email: yup.string().required('Required field.').email('Email is not valid.'),
  password: yup.string().required('Required field'),
})

type LoginForm = yup.InferType<typeof schema>

const LoginPageContent = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const dispatch = useAppDispatch()
  const router = useRouter()

  const methods = useForm<LoginForm>({
    resolver: yupResolver(schema),
    mode: 'all',
    criteriaMode: 'all',
    reValidateMode: 'onChange',
  })

  const handleSubmitForm = (data: LoginForm) => {
    setLoading(true)
    setError('')
    authService
      .login(data)
      .then(({ data: { access_token, user } }) => {
        tokenManager.saveToken(access_token)
        dispatch(
          authActions.setAuthState({
            isCheckingAuth: false,
            isCheckedAuth: true,
            isAuth: true,
            user,
          })
        )
        router.push(routers.account)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <FormProvider {...methods}>
      <AuthContainer>
        <AuthHeading title="Login" />
        <AuthForm onSubmit={methods.handleSubmit(handleSubmitForm)}>
          <TextField name="email" placeholder="Email" />
          <TextField name="password" type="password" placeholder="Password" />
          <Link href={routers.forgotPassword}>Forgot your password?</Link>
          <ErrorMessage message={error} />
          <Button className={cx('btn-submit', 'align-center')} loading={loading}>
            Login
          </Button>
          <Link className={cx('align-center')} href={routers.register}>
            Create account
          </Link>
        </AuthForm>
        <ThirdParties />
      </AuthContainer>
    </FormProvider>
  )
}

export default LoginPageContent
