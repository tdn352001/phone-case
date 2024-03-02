import React from 'react'
import Image from 'next/image'

interface CaseTypesProps {}

const caseTypes = [
  {
    id: '1',
    price: 20,
    thumbnail: '/images/case-type-1.webp',
  },
]

const CaseTypes = () => {
  return (
    <div>
      {caseTypes.map((item) => {
        return (
          <div key={item.id}>
            <Image width={100} height={100} src={item.thumbnail} alt="case type" />
            <p>{item.price.toLocaleString()} VNĐ</p>
          </div>
        )
      })}
    </div>
  )
}

export default CaseTypes
