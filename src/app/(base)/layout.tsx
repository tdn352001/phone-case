import { PropsWithChildren } from 'react'
import Footer from '~/app/(base)/_components/footer'
import Header from './_components/header'

const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default BaseLayout
