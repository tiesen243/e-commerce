import { toast } from '@/components/ui/use-toast'
import { uploadImage } from '@/lib/firebase'
import { Category, Tag } from '@/types/enum'
import { IProduct } from '@/types/product'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const editSchema = z.object({
  description: z.string().min(4).max(1000),
  available: z.boolean(),
  saleOffPercent: z.number().min(0).max(100),
  image: z.instanceof(File).nullable(),
  price: z.coerce.number(),
  stock: z.coerce.number(),
  category: z.nativeEnum(Category),
  tags: z.array(z.nativeEnum(Tag)),
})

export type IEdit = z.infer<typeof editSchema>

export const resolver = zodResolver(editSchema)

export const edit = async (data: IEdit, product: IProduct) => {
  let url: string = product.image
  if (data.image !== null) url = await uploadImage(data.image, product.name)
  try {
    const res = await fetch(`/api/product?id=${product._id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, image: url }),
    })
    if (!res.ok) throw new Error((await res.json()).message)
    toast({ description: 'Product update successfully' })
  } catch (e: any) {
    toast({ description: e.message, variant: 'destructive' })
    throw new Error(e.message)
  }
}
