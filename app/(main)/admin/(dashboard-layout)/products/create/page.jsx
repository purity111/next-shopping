'use client'

import { useRouter } from 'next/navigation'

import { HandleResponse, PageContainer, ProductsForm } from 'components'

import { useCreateProductMutation } from '@/store/services'
import { useTitle } from '@/hooks'

const CreateProductPage = () => {
  useTitle('商品新增')
  //? Assets
  const { push } = useRouter()

  //? Queries
  //*   Create Product
  const [createProduct, { data, isSuccess, isLoading, isError, error }] = useCreateProductMutation()

  //? Handlers
  const createHandler = data => {
    console.log(data)
    createProduct({ body: data })
  }

  const onSuccess = () => {
    push('/admin/products')
  }

  return (
    <>
      {(isSuccess || isError) && (
        <HandleResponse
          isError={isError}
          isSuccess={isSuccess}
          error={error?.data?.message}
          message={data?.message}
          onSuccess={onSuccess}
        />
      )}

      <main>
        <PageContainer title="商品新增">
          <ProductsForm mode="create" isLoadingCreate={isLoading} createHandler={createHandler} />
        </PageContainer>
      </main>
    </>
  )
}

export default CreateProductPage
