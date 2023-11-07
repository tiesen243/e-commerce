import { CreateProduct, IProduct, axios, deleteImage, showErrorToast, showSuccessToast, uploadImage } from '@/lib'

const createProduct = async (formData: CreateProduct, token: string): Promise<string> => {
  try {
    if (!formData.image) {
      showErrorToast('Please upload an image')
      throw new Error('Please upload an image')
    }

    const code: string = (Math.floor(Math.random() * 900000) + 100000) as unknown as string
    const url: string = await uploadImage(formData.image, code, 'product')

    await axios
      .post('/product/create', { ...formData, code, image: url }, { headers: { Authorization: `Bearer ${token}` } })
      .catch(async (error) => {
        await deleteImage(code, 'product')
        throw new Error(error.response.data.message)
      })

    showSuccessToast('Product created successfully')
    return ''
  } catch (error: any) {
    showErrorToast('Something went wrong')
    return error.message.split(',')
  }
}

export default createProduct
