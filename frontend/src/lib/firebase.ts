import { initializeApp } from 'firebase/app'
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLI_MEASURE,
}

const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)

const uploadImage = async (image: File | null, name: string): Promise<string> => {
  const imgName: string = name.replace(/ /g, '-').toLowerCase()
  const imageRef = ref(storage, `products/${imgName}`)
  const uploadTask = await uploadBytes(imageRef, image as Blob)
  const url = await getDownloadURL(uploadTask.ref)
  return url
}

const deleteImage = async (name: string) => {
  const imgName: string = name.replace(/ /g, '-').toLowerCase()
  const imageRef = ref(storage, `products/${imgName}`)
  await deleteObject(imageRef).catch(() => {})
}

export { deleteImage, uploadImage }
