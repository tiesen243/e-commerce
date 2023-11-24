import { ChangeEvent } from 'react'
import { RefCallBack } from 'react-hook-form'

export default interface Field {
  ref: RefCallBack
  name: string
  value: any
  onChange: (event: ChangeEvent) => void
  onBlur: () => void
}
