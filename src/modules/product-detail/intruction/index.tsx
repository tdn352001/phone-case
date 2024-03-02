import React from 'react'
import Icon from '~/components/common/icon'

const CaseInstructions = () => {
  return (
    <div>
      <div>
        <Icon name="Heart" />
        <span>Care Instructions</span>
        <Icon name="ChevronDown" />
      </div>
      <div>
        This product can resist high temperatures, freezing, and acidic substances. Plastic
        products, keep away from flames.
      </div>
    </div>
  )
}

export default CaseInstructions
