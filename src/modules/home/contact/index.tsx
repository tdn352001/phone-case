'use client'

import React from 'react'
import HomeSectionContainer from '~/components/templates/home/container'
import PageTitle from '~/components/templates/page/title'
import * as yup from 'yup'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'sonner'
import TextField from '~/components/common/inputs/text-field'
import classNames from 'classnames/bind'
import styles from './contact.module.scss'

const cx = classNames.bind(styles)

const schema = yup.object().shape({
  email: yup.string().required('Required field.').email('Email is not valid.'),
  password: yup.string().required('Required field'),
})

type ContactForm = yup.InferType<typeof schema>

const Contact = () => {
  const methods = useForm<ContactForm>({
    resolver: yupResolver(schema),
    mode: 'all',
    criteriaMode: 'all',
    reValidateMode: 'onChange',
  })

  const handleSubmit = () => {
    methods.reset()
    toast.success('Form submitted successfully. Thank you for joining the club!')
  }

  return (
    <HomeSectionContainer className={cx('container')}>
      <PageTitle>Join the Club</PageTitle>

      <p className={cx('desc')}>Receive email updates about new products & exclusive discounts.</p>
      <FormProvider {...methods}>
        <form className={cx('form')} onSubmit={methods.handleSubmit(handleSubmit)}>
          <TextField name="email" placeholder="Email" />
        </form>
      </FormProvider>
    </HomeSectionContainer>
  )
}

export default Contact
