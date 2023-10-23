import { Close } from '@mui/icons-material'
import { Avatar, Button, Container, FormHelperText, IconButton, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

import { Loading } from '@/components'
import IUser from '@/types/user.type'
import { deleteImage, showErrorToast, showSuccessToast, uploadImage } from '@/utils'

interface Props {
  user: IUser
  token: string
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AvatarPopup: React.FC<Props> = (props) => {
  const { user, token, setIsOpen } = props
  const [avatar, setAvatar] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(user.avatar)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if (!avatar) return
    if (avatar.size > 5 * 1024 * 1024) {
      setAvatar(null)
      showErrorToast('Image size must be less than 5MB')
    } else if (!avatar.name.match(/\.(jpg|jpeg|png)$/)) {
      setAvatar(null)
      showErrorToast('Image must be .jpg or .png or .jpeg')
    } else {
      const file = new FileReader()
      file.onload = () => setPreview(file.result as string)
      file.readAsDataURL(avatar as Blob)
    }
  }, [avatar])

  const handleSave = async () => {
    if (!avatar || !preview) {
      showErrorToast('Please choose an image')
      setIsOpen(false)
      return
    }
    setIsLoading(true)
    await deleteImage(user._id, 'avatar').catch((err) => err)
    const url = await uploadImage(avatar, user._id, 'avatar').catch((err) => showErrorToast(err.message))
    const res = await fetch('/api/v1/user/update/info', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ avatar: url }),
    })
    if (res.status === 204) {
      showSuccessToast('Change avatar successfully')
      setIsOpen(false)
    } else {
      showErrorToast('Change avatar failed')
      setIsLoading(false)
    }
  }

  return (
    <main className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50">
      <Container maxWidth="sm" className="main flex flex-col gap-8 rounded p-4 shadow-lg">
        <section className="grid grid-cols-12 items-center">
          <Typography variant="h1" className="col-span-11 text-center text-3xl">
            Change avatar
          </Typography>
          <IconButton onClick={() => setIsOpen(false)}>
            <Close />
          </IconButton>
        </section>

        <Avatar src={preview || ''} sx={{ width: 200, height: 200 }} className="mx-auto" />

        <FormHelperText className="text-center">Image must be .jpg or .png or .jpeg and less than 5MB</FormHelperText>

        <section className="flex items-center justify-around">
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
