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
import styles from './reset-form.module.scss'

const cx = classNames.bind(styles)

const schema = yup.object().shape({
  email: yup.string().email('Email is not valid.'),
  code: yup.string().required('Required field'),
  password: yup.string().required('Required field'),
})

type ResetFormType = yup.InferType<typeof schema>

interface ResetFormProps {
  email: string
  onPrevStep?: () => void
}

const ResetForm = ({ email }: ResetFormProps) => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const methods = useForm<ResetFormType>({
    resolver: yupResolver(schema),
    mode: 'all',
    criteriaMode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      email,
    },
  })

  const handleSubmitForm = (data: ResetFormType) => {
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
        <AuthHeading title="Reset password" subtitle="Enter your code and new password" />
        <AuthForm onSubmit={methods.handleSubmit(handleSubmitForm)}>
          <TextField name="email" placeholder="Email" disabled />
          <TextField name="code" placeholder="Code" />
          <TextField name="password" type="password" placeholder="Password" />
          <ErrorMessage message={error} />
          <Button className={cx('btn-submit', 'align-center')} loading={loading}>
            Reset password
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

export default ResetForm
