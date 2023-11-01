import { IProduct, deleteImage, uploadImage } from '@/lib'

interface IResponse {
  status: number
  message: string[]
}

const updateProduct = async (formData: IProduct, token?: string): Promise<IResponse> => {
  if (!token) return { status: 401, message: ['Unauthorized'] }
  if (typeof formData.image !== 'string') await deleteImage(formData.code.toString(), 'product')
  const url: string =
    typeof formData.image === 'string'
      ? formData.image
      : await uploadImage(formData.image, formData.code.toString(), 'product')

  const res = await fetch(`/api/v1/product/update/${formData._id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ ...formData, image: url }),
  })
  if (res.status !== 204)
    return {
      status: res.status,
      message: await res.json().then((data) => data.message),
    }
  return {
    status: res.status,
    message: ['Product updated successfully'],
  }
}

export default updateProduct
