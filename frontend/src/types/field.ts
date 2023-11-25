import { ChangeEvent } from 'react'
import { RefCallBack } from 'react-hook-form'

export default interface IField {
  ref: RefCallBack
  name: string
  value: any
  onChange: (event: ChangeEvent) => void
  onBlur: () => void
}
