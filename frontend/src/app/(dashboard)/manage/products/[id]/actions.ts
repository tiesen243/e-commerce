import { IProduct, axios, showErrorToast, uploadImage } from '@/lib'

export const updateProduct = async (formData: IProduct | undefined, token: string) => {
  try {
    if (!formData) throw new Error('No form data')
    let url = formData.image
    if (typeof formData.image !== 'string') url = await uploadImage(formData.image, formData.code.toString(), 'product')

    await axios.patch(
      `/product/update/${formData._id}`,
      { ...formData, image: url },
      { headers: { Authorization: `Bearer ${token}` } },
    )
  } catch (err: any) {
    showErrorToast('Error updating product')
    return err.response.data.message
  }
}

export const getProductById = async (
  id: string,
  setFormData: React.Dispatch<React.SetStateAction<IProduct>>,
): Promise<void> => {
  try {
    const { data } = await axios.get(`/product/${id}`)
    setFormData(data.data)
  } catch (err) {
    showErrorToast('Error getting product')
  }
}
