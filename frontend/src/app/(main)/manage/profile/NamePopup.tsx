import { Close } from '@mui/icons-material'
import { Button, Container, IconButton, Typography } from '@mui/material'
import { useState } from 'react'

import { CustomTextField, Loading } from '@/components'
import { showErrorToast, showSuccessToast } from '@/utils'

interface Props {
  setIsChange: React.Dispatch<React.SetStateAction<boolean>>
  token: string
  name: string
}

const NamePopup: React.FC<Props> = (props) => {
  const { setIsChange } = props
  const [name, setName] = useState<string>(props.name)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSave = async () => {
    setIsLoading(true)
    if (!name) {
      showErrorToast('Please enter your name')
      setIsLoading(false)
      return
    } else if (name === props.name) {
      setIsChange(false)
      showErrorToast('No change')
    } else {
      const res = await fetch('/api/v1/user/update/info', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${props.token}`,
        },
        body: JSON.stringify({ userName: name }),
      })

      if (res.status === 204) {
        showSuccessToast('Change name successfully')
        setIsChange(false)
      } else {
        showErrorToast('Change name failed')
        setIsLoading(false)
      }
    }
  }
  return (
    <main className="fixed inset-0 flex h-screen w-screen items-center justify-center bg-black/50">
      <Container maxWidth="sm" className="main flex flex-col gap-8 rounded p-4 shadow-lg">
        <section className="grid grid-cols-12 items-center">
          <Typography variant="h1" className="col-span-11 text-center text-3xl">
            Change user name
          </Typography>
          <IconButton onClick={() => setIsChange(false)}>
            <Close />
          </IconButton>
        </section>

        <CustomTextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />

        <Button variant="outlined" color="info" onClick={handleSave}>
          Save
        </Button>
      </Container>

      {isLoading && <Loading text="Changing..." />}
    </main>
  )
}

export default NamePopup
