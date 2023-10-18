import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyC3KrhnqMDy2ocz8O-hFuWYLioNpJ85wNA',
  authDomain: 'e-comerce-dc328.firebaseapp.com',
  projectId: 'e-comerce-dc328',
  storageBucket: 'e-comerce-dc328.appspot.com',
  messagingSenderId: '716969826436',
  appId: '1:716969826436:web:b79af92b089f3a1213cad1',
  measurementId: 'G-WDLNR19KSX',
}

const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const storage = getStorage(app)

export const uploadImage = async (image: File | null, name: string): Promise<string> => {
  const imageRef = ref(storage, `product/${name.replace(/\s/g, '')}`)
  const uploadTask = await uploadBytes(imageRef, image as Blob)
  const url = await getDownloadURL(uploadTask.ref)
  return url
}

export const deleteImage = async (name: string) => {
  const imageRef = ref(storage, `product/${name.replace(/\s/g, '')}`)
  await deleteObject(imageRef).catch(() => {})
}
