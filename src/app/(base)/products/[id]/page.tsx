import { notFound } from 'next/navigation'
import React, { cache } from 'react'
import ProductDetailPageContent from '~/modules/product-detail'
import { GetCaseDetailResponse, caseService } from '~/services/case-service'

export const getDetail = cache(async (id: string): Promise<GetCaseDetailResponse> => {
  if (id == '1') {
    throw new Error('error')
  }

  return {
    data: {
      id: id,
      custom_id: '1',
      name: 'Gracie Abrams ID Card iPhone Case',
      type: 'type',
      desc: 'desc',
      price: 100,
      is_sold_out: false,
      point: 100,
      createdAt: '2021-01-01',
      updatedAt: '2021-01-01',
      sliders: [
        '/images/product-1.png',
        '/images/product-2.png',
        '/images/product-3.png',
        '/images/product-4.png',
        '/images/product-5.png',
        '/images/product-6.png',
      ],
      types: ['/images/case-type-1.webp'],
    },
  }
})

const ProductDetailPage = async ({ params: { id } }: { params: { id: string } }) => {
  const { data: phoneCase } = await getDetail(id)

  if (!phoneCase) {
    return notFound()
  }

  return <ProductDetailPageContent phoneCase={phoneCase} />
}

export default ProductDetailPage
