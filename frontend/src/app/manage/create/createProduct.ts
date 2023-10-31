import { CreateProduct, IProduct, deleteImage, showErrorToast, showSuccessToast, uploadImage } from '@/lib'

interface Response {
  data: IProduct | null
  error: any
}

const createProduct = async (formData: CreateProduct, token: string): Promise<Response> => {
  if (!formData.image) {
    showErrorToast('Please upload an image')
    return {
      data: null,
      error: 'Please upload an image',
    }
  }

  const code: string = (Math.floor(Math.random() * 900000) + 100000) as unknown as string
  const url: string = await uploadImage(formData.image, code, 'product')
  const res = await fetch('/api/v1/product/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ ...formData, image: url, code }),
  })
  const { data, message } = await res.json()

  if (res.status !== 201) {
    showErrorToast('Something went wrong')
    await deleteImage(code, 'product')
    return {
      data: null,
      error: message,
    }
  }

  showSuccessToast('Product created successfully')
  return {
    data,
    error: null,
  }
}

export default createProduct
