import React from 'react'
import { CardDescription, CardHeader, CardTitle } from '../ui/card'

type Props = {
  title: string
  description: string
}

const Header: React.FC<Props> = ({ title, description }) => (
  <CardHeader>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardHeader>
)

export default Header
