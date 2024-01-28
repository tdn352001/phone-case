import PolicyBody from '~/app/(base)/policies/_components/body'
import PolicyContainer from '~/app/(base)/policies/_components/container'
import PolicyTitle from '~/app/(base)/policies/_components/title'

const ContactInformation = () => {
  return (
    <PolicyContainer>
      <PolicyTitle>Contact information</PolicyTitle>
      <PolicyBody>
        <p>
          Trade name: <span>indivisual</span>
        </p>
        <p>Email: group@indivisualhub.com</p>
        <p>
          Physical address: <span>24 NEWPORT STREET, LEICESTER, LE3 9FT, UK</span>
        </p>
      </PolicyBody>
    </PolicyContainer>
  )
}

export default ContactInformation
