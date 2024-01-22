import { PropsWithChildren } from 'react'
import Footer from '~/app/(base)/_components/footer'
import Header from './_components/header'

const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      <div
        style={{
          height: '500px',
          backgroundImage: 'linear-gradient(to bottom, red, yellow)',
          backgroundSize: '200px',
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default BaseLayout
