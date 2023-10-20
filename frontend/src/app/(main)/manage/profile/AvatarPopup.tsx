import { Close } from '@mui/icons-material'
import { Avatar, Button, Container, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

import IUser from '@/types/user.type'
import { deleteImage, uploadImage } from '@/utils/firebase'
import { ErrorToast, SuccessToast } from '@/utils/notify'
import { Loading } from '@/components'

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  user: IUser
}

const AvatarPopup: React.FC<Props> = (props) => {
  const { user, setIsOpen } = props
  const [avatar, setAvatar] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(user.avatar)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if (!avatar) return
    if (avatar.size > 5 * 1024 * 1024) {
      setAvatar(null)
      ErrorToast('Image size must be less than 5MB')
    } else if (!avatar.name.match(/\.(jpg|jpeg|png)$/)) {
      setAvatar(null)
      ErrorToast('Image must be .jpg or .png or .jpeg')
    } else {
      const file = new FileReader()
      file.onload = () => setPreview(file.result as string)
      file.readAsDataURL(avatar as Blob)
    }
  }, [avatar])

  const handleSave = async () => {
    if (!avatar || !preview) {
      ErrorToast('Please choose an image')
      setIsOpen(false)
      return
    }
    setIsLoading(true)
    await deleteImage(user.userName).catch((err) => err)
    await uploadImage(avatar, user.userName, 'avatar')
      .catch((err) => ErrorToast(err.message))
      .then(() => {
        SuccessToast('Change avatar successfully')
        setIsOpen(false)
      })
  }

  return (
    <main className="fixed inset-0 bg-black/50 flex items-center justify-center w-screen h-screen">
      <Container maxWidth="sm" className="main p-4 rounded shadow-lg flex flex-col gap-8">
        <section className="grid grid-cols-12 items-center">
          <Typography variant="h1" className="text-3xl col-span-11 text-center">
            Change avatar
          </Typography>
          <Close onClick={() => setIsOpen(false)} />
        </section>

        <Avatar src={preview || ''} sx={{ width: 200, height: 200 }} className="mx-auto" />

        <section className="flex justify-around items-center">
          <input type="file" onChange={(e) => setAvatar((prev) => (e.target.files ? e.target.files[0] : prev))} />

          <Button variant="outlined" color="info" className="mx-auto" disabled={!preview} onClick={handleSave}>
            Save
          </Button>
        </section>
      </Container>

      {isLoading && <Loading />}
    </main>
  )
}

export default AvatarPopup
