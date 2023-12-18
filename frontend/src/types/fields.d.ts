import { ChangeEvent } from 'react'
import { RefCallBack } from 'react-hook-form'

interface IFields {
  ref: RefCallBack
  name: string
  value: any
  onChange: (event: ChangeEvent) => void
  onBlur: () => void
}
