import PolicyBody from '~/components/templates/policy/body'
import PolicyContainer from '~/components/templates/policy/container'
import PolicyTitle from '~/components/templates/policy/title'

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
